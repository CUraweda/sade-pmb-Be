const httpStatus = require("http-status");
const AuthService = require("../service/AuthService");
const UserService = require("../service/UserService");
const AnnouncementService = require("../service/AnnouncementService");
const logger = require("../config/logger");
const uploadFile = require("../middlewares/uploadDoc");
const fs = require("fs");

class AnnouncementController {
  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
    this.announcementService = new AnnouncementService();
  }

  create = async (req, res) => {
    try {
      const responseData = await this.announcementService.createAnnouncement(
        req.body
      );

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  update = async (req, res) => {
    try {
      await uploadFile(req, res);

      var id = req.params.id;

      const responseData = await this.announcementService.updateAnnouncement(
        id,
        req
      );

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  upload = async (req, res) => {
    try {
      await uploadFile(req, res);

      var id = req.params.id;

      const responseData = await this.announcementService.uploadForm(id, req);
      const { message, data } = responseData.response;
      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  uploadTwo = async (req, res) => {
    try {
      await uploadFile(req, res);

      var id = req.params.id;

      const responseData = await this.announcementService.uploadFormTwo(
        id,
        req
      );
      const { message, data } = responseData.response;
      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  uploadR = async (req, res) => {
    try {
      await uploadFile(req, res);

      var id = req.params.id;

      const responseData = await this.announcementService.uploadResult(id, req);
      const { message, data } = responseData.response;
      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  show = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.announcementService.showAnnouncement(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showAllByCandidateId = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData =
        await this.announcementService.showAllAnnouncementByCandidateId(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showAll = async (req, res) => {
    try {
      const responseData = await this.announcementService.showAll();

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

      const responseData = await this.announcementService.deleteAnnouncement(
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

      let annData = await this.announcementService.showAnnouncement(id);

      // console.log(annData);

      if (annData.statusCode === httpStatus.NOT_FOUND) {
        res.status(httpStatus.OK).send({
          status: true,
          code: httpStatus.OK,
          message: "Announcement data not found.",
        });
      } else {
        var resPath = annData.response.data.form_url;

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

  fileDownloadR = async (req, res) => {
    try {
      const id = req.params.id;

      let annData = await this.announcementService.showAnnouncement(id);

      // console.log(annData);

      if (annData.statusCode === httpStatus.NOT_FOUND) {
        res.status(httpStatus.OK).send({
          status: true,
          code: httpStatus.OK,
          message: "Announcement data not found.",
        });
      } else {
        var resPath = annData.response.data.result_url;

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

module.exports = AnnouncementController;
