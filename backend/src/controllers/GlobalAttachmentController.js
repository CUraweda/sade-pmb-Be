const httpStatus = require("http-status");
const AuthService = require("../service/AuthService");
const UserService = require("../service/UserService");
const GlobalAttachmentService = require("../service/GlobalAttachmentService");
const logger = require("../config/logger");
const uploadFile = require("../middlewares/upload");
const fs = require("fs");

class GlobalAttachmentController {
  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
    this.globalAttachmentService = new GlobalAttachmentService();
  }

  create = async (req, res) => {
    try {
      if (req.file !== null || req.file !== undefined) {
        await uploadFile(req, res);
      }

      const responseData = await this.globalAttachmentService.createAttachment(
        req
      );

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  update = async (req, res) => {
    try {
      var id = req.params.id;

      if (req.file !== null || req.file !== undefined) {
        await uploadFile(req, res);
      }

      const responseData = await this.globalAttachmentService.updateAttachment(
        id,
        req
      );

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  show = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.globalAttachmentService.showAttachment(
        id
      );

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showAllByUserId = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData =
        await this.globalAttachmentService.showAllAttachmentByUserId(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  delete = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.globalAttachmentService.deleteAttachment(
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
      const filePath = req.body.path;

      console.log(filePath);

      res.download(filePath, function (err) {
        console.log(err);
      });
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };
}

module.exports = GlobalAttachmentController;
