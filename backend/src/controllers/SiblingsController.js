const httpStatus = require("http-status");
const AuthService = require("../service/AuthService");
const UserService = require("../service/UserService");
const SiblingService = require("../service/SiblingService");
const logger = require("../config/logger");

class SiblingsController {
  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
    this.siblingService = new SiblingService();
  }

  create = async (req, res) => {
    try {
      const responseData = await this.siblingService.createSibling(req.body);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  createBulk = async (req, res) => {
    try {
      const data = req.body.data;

      for (const key in data) {
        this.siblingService.createSibling(data[key]);
      }

      res.status(httpStatus.CREATED).send({
        status: true,
        code: httpStatus.CREATED,
        message: "Siblings successfully added.",
        data,
      });
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  update = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.siblingService.updateSibling(
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

      const responseData = await this.siblingService.showSibling(id);

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

      const responseData = await this.siblingService.showAllSiblingsByUserId(
        id
      );

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

      const responseData = await this.siblingService.deleteSibling(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };
}

module.exports = SiblingsController;
