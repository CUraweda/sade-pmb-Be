const httpStatus = require("http-status");
const AuthService = require("../service/AuthService");
const UserService = require("../service/UserService");
const MedicalHistoryService = require("../service/MedicalHistoryService");
const logger = require("../config/logger");

class MedicalHistoryController {
  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
    this.medicalHistoryService = new MedicalHistoryService();
  }

  create = async (req, res) => {
    try {
      const responseData =
        await this.medicalHistoryService.createMedicalHistory(req.body);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  update = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData =
        await this.medicalHistoryService.updateMedicalHistory(id, req.body);

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

      const responseData = await this.medicalHistoryService.showMedicalHistory(
        id
      );

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
        await this.medicalHistoryService.showAllMedicalHistoryByCandidateId(id);

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

      const responseData =
        await this.medicalHistoryService.deleteMedicalHistory(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };
}

module.exports = MedicalHistoryController;
