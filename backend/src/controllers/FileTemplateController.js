const httpStatus = require("http-status");
const AuthService = require("../service/AuthService");
const UserService = require("../service/UserService");
const FileTemplateService = require("../service/FileTemplateService");
const logger = require("../config/logger");
const uploadFile = require("../middlewares/uploadTemplates");
const fs = require("fs");

class FileTemplatesController {
  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
    this.fileTemplateService = new FileTemplateService();
  }

  create = async (req, res) => {
    try {
      if (req.file !== null || req.file !== undefined) {
        await uploadFile(req, res);
      }

      const responseData = await this.fileTemplateService.createFileTemplate(
        req
      );

      //   const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  update = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.fileTemplateService.updateFileTemplate(
        id,
        req.body
      );

      console.log(req);

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  show = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.fileTemplateService.showFileTemplate(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showByCandidateId = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.fileTemplateService.showByCandidateId(id);

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showAll = async (req, res) => {
    try {
      const responseData =
        await this.fileTemplateService.showAllFileTemplates();

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  delete = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.fileTemplateService.deleteFileTemplate(
        id
      );

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  fileBuff = async (req, res) => {
    try {
      const filePath = req.body.path;

      console.log(filePath);

      var buffer = fs.readFileSync(filePath, { encoding: "base64" });
      // var bufferBase64 = new Buffer(buffer);
      res.status(200).send(buffer);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  fileDownload = async (req, res) => {
    try {
      const id = req.params.id;

      let annData = await this.fileTemplateService.showFileTemplate(id);

      if (annData.statusCode === httpStatus.NOT_FOUND) {
        res.status(httpStatus.OK).send({
          status: true,
          code: httpStatus.OK,
          message: "File template data not found.",
        });
      } else {
        var resPath = annData.response.data.path;

        // console.log(annData.response.data);

        res.download(resPath, function (err) {
          console.log(err);
        });
      }
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };
}

module.exports = FileTemplatesController;
