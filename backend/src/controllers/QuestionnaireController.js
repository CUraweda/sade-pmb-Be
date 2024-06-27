const httpStatus = require("http-status");
const AuthService = require("../service/AuthService");
const UserService = require("../service/UserService");
const QuestionnaireService = require("../service/QuestionnaireService");
const logger = require("../config/logger");

class QuestionnaireController {
  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
    this.questionnaireService = new QuestionnaireService();
  }

  create = async (req, res) => {
    try {
      const responseData = await this.questionnaireService.createQue(req.body);

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

      const responseData = await this.questionnaireService.updateQue(
        id,
        req.body
      );

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

      const responseData = await this.questionnaireService.showQue(id);

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
        await this.questionnaireService.showAllQueByCandidateId(id);

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

      const responseData = await this.questionnaireService.deleteQue(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };
}

module.exports = QuestionnaireController;
