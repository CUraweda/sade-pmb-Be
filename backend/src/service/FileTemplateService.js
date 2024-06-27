const httpStatus = require("http-status");
const FileTemplateDao = require("../dao/FileTemplateDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");
const fs = require("fs");

class FileTemplateService {
  constructor() {
    this.fileTemplateDao = new FileTemplateDao();
  }

  createFileTemplate = async (req) => {
    try {
      let message = "File Template successfully added.";

      let data = await this.fileTemplateDao.create({
        candidate_id: req.body.candidate_id,
        name: req.body.name,
        mime_type: req.file.mimetype,
        path: req.file.path,
        filename: req.file.filename,
        original_filename: req.file.originalname,
      });

      if (!data) {
        message = "Failed to add File template.";
        return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
      }

      return responseHandler.returnSuccess(httpStatus.CREATED, message, data);
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  updateFileTemplate = async (id, req) => {
    try {
      const message = "FileTemplate successfully updated!";

      let filetemplate = await this.fileTemplateDao.findById(id);

      if (!filetemplate) {
        return responseHandler.returnError(
          httpStatus.NOT_FOUND,
          "File Template not found!"
        );
      }
      //   if (req.file) {
      //     console.log(req.file);
      //     console.log("File Attached");
      //   } else {
      //     console.log("File No Attached");
      //   }
      //   console.log(req);
      if (req.file) {
        if (req.file.originalname === filetemplate.original_filename) {
          console.log("File are same as existing");
          var updateData = await this.fileTemplateDao.updateWhere(
            {
              name: req.body.name,
            },
            { id }
          );
        } else {
          // console.log("File different than original file");
          var updateData = await this.fileTemplateDao.updateWhere(
            {
              candidate_id: req.body.candidate_id,
              name: req.body.name,
              mime_type: req.file.mimetype,
              path: req.file.path,
              filename: req.file.filename,
              original_filename: req.file.originalname,
            },
            { id }
          );

          //delete existing file
          fs.unlink(filetemplate.path, (err) => {
            if (err) {
              return responseHandler.returnError(
                httpStatus.NOT_FOUND,
                "Cannot delete attachment!"
              );
            }

            console.log("Delete File successfully.");
          });

          return responseHandler.returnSuccess(
            httpStatus.OK,
            message,
            updateData
          );
        }
      } else {
        console.log("No file Attached");

        return responseHandler.returnSuccess(
          httpStatus.OK,
          "No File Attached",
          {}
        );
      }
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  showFileTemplate = async (id) => {
    const message = "FileTemplate successfully retrieved!";

    let filetemplate = await this.fileTemplateDao.findById(id);

    if (!filetemplate) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "File Template not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, filetemplate);
  };

  showByCandidateId = async (id) => {
    const message = "FileTemplate successfully retrieved!";

    let filetemplate = await this.fileTemplateDao.getByCandidateId(id);

    if (!filetemplate) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "File Template not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, filetemplate);
  };

  showAllFileTemplates = async () => {
    const message = "All File templates successfully retrieved!";

    let filetemplates = await this.fileTemplateDao.getAll();

    if (!filetemplates) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "File templates not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, filetemplates);
  };

  deleteFileTemplate = async (id) => {
    const message = "FileTemplate successfully deleted!";

    let temp = await this.fileTemplateDao.findById(id);

    if (!temp) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "File Template not found!"
      );
    }

    let filetemplate = await this.fileTemplateDao.deleteByWhere({ id });

    if (!filetemplate) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "File Template not found!"
      );
    }

    //delete existing file
    fs.unlink(temp.path, (err) => {
      if (err) {
        return responseHandler.returnError(
          httpStatus.NOT_FOUND,
          "Cannot delete attachment!"
        );
      }

      console.log("Delete File successfully.");
    });

    return responseHandler.returnSuccess(httpStatus.OK, message, filetemplate);
  };
}
module.exports = FileTemplateService;
