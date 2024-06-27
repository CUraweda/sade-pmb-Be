const httpStatus = require("http-status");
const GlobalAttachmentDao = require("../dao/GlobalAttachmentDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");
const fs = require("fs");

class GlobalAttachmentService {
  constructor() {
    this.globalAttachmentDao = new GlobalAttachmentDao();
  }

  createAttachment = async (req) => {
    try {
      let message = "Attachment successfully added.";

      let globalAttachmentData = await this.globalAttachmentDao.create({
        candidate_id: req.body.candidate_id,
        attachment_type: req.body.attachment_type,
        mime_type: req.file.mimetype,
        path: req.file.path,
        filename: req.file.filename,
        original_filename: req.file.originalname,
      });

      if (!globalAttachmentData) {
        message = "Failed to add attachment.";
        return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
      }

      return responseHandler.returnSuccess(
        httpStatus.CREATED,
        message,
        globalAttachmentData
      );
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  updateAttachment = async (id, req) => {
    try {
      let message = "Attachment successfully updated.";

      let findAttachment = await this.globalAttachmentDao.findById(id);
      console.log(findAttachment.original_filename);

      if (req.file != null || req.file !== undefined) {
        if (req.file.originalname === findAttachment.original_filename) {
          console.log("File are same as existing");
          var updateData = await this.globalAttachmentDao.updateWhere(
            {
              attachment_type: req.body.attachment_type,
            },
            { id }
          );
        } else {
          console.log("File different than original file");
          var updateData = await this.globalAttachmentDao.updateWhere(
            {
              attachment_type: req.body.attachment_type,
              mime_type: req.file.mimetype,
              path: req.file.path,
              filename: req.file.filename,
              original_filename: req.file.originalname,
            },
            { id }
          );

          //delete existing file
          fs.unlink(findAttachment.path, (err) => {
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

        return responseHandler.returnSuccess(
          httpStatus.OK,
          message,
          updateData
        );
      } else {
        const updateData = await this.globalAttachmentDao.updateWhere(
          {
            attachment_type: req.body.attachment_type,
          },
          { id }
        );

        return responseHandler.returnSuccess(
          httpStatus.OK,
          message,
          updateData
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

  createAttachmentX = async (id, req) => {
    try {
      let message = "Attachment successfully added.";

      let findAttachment = await this.globalAttachmentDao.findById(id);
      console.log("findAttachment: " + findAttachment);

      if (!findAttachment) {
        console.log("findAttachment: Kosong");
        let globalAttachmentData = await this.globalAttachmentDao.create({
          candidate_id: req.body.candidate_id,
          attachment_type: req.body.attachment_type,
          mime_type: req.file.mimetype,
          path: req.file.path,
          filename: req.file.filename,
          original_filename: req.file.originalname,
        });

        if (!globalAttachmentData) {
          message = "Failed to add attachment.";
          return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
        }

        return responseHandler.returnSuccess(
          httpStatus.CREATED,
          message,
          globalAttachmentData
        );
      } else {
        //case handle jika attachmentnnya sama
        //case handle jiga tidak ada atachment baru yang dilampirkan
        if (req.file !== undefined) {
          if (req.file.originalname === findAttachment.original_filename) {
            console.log("Original filename true");
            const updateData = await this.globalAttachmentDao.updateWhere(
              {
                attachment_type: req.body.attachment_type,
              },
              { id }
            );

            //delete existing file
            fs.unlink(req.file.path, (err) => {
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
          } else {
            console.log("Original filename berbeda");
            const updateData = await this.globalAttachmentDao.updateWhere(
              {
                attachment_type: req.body.attachment_type,
                mime_type: req.file.mimetype,
                path: req.file.path,
                filename: req.file.filename,
                original_filename: req.file.originalname,
              },
              { id }
            );

            //delete existing file
            fs.unlink(findAttachment.path, (err) => {
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
        }
      }
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  showAttachment = async (id) => {
    const message = "Attachment successfully retrieved!";

    let globalAttachmentData = await this.globalAttachmentDao.findById(id);

    if (!globalAttachmentData) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Attachment data not found!"
      );
    }

    return responseHandler.returnSuccess(
      httpStatus.OK,
      message,
      globalAttachmentData
    );
  };

  showAllAttachmentByUserId = async (candidate_id) => {
    const message = "All attachment data successfully retrieved!";

    let globalAttachmentData = await this.globalAttachmentDao.findByWhere({
      candidate_id,
    });

    if (!globalAttachmentData) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Attachment data not found!"
      );
    }

    return responseHandler.returnSuccess(
      httpStatus.OK,
      message,
      globalAttachmentData
    );
  };

  deleteAttachment = async (id) => {
    const message = "Attachment successfully deleted!";

    let result = await this.globalAttachmentDao.findById(id);

    if (!result) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Attachment data not found!"
      );
    }

    console.log("Result : " + result.id);

    let globalAttachmentData = await this.globalAttachmentDao.deleteByWhere({
      id,
    });

    if (!globalAttachmentData) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Attachment not found!"
      );
    }

    fs.unlink(result.path, (err) => {
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
      globalAttachmentData
    );
  };
}
module.exports = GlobalAttachmentService;
