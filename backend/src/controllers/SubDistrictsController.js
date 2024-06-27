const httpStatus = require("http-status");
const AuthService = require("../service/AuthService");
const UserService = require("../service/UserService");
const SubDistrictService = require("../service/SubDistrictService");
const logger = require("../config/logger");

class SubDistrictsController {
  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
    this.subDistrictService = new SubDistrictService();
  }

  create = async (req, res) => {
    try {
      const responseData = await this.subDistrictService.createSubDistrict(
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
      var id = req.params.id;

      const responseData = await this.subDistrictService.updateSubDistrict(
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

      const responseData = await this.subDistrictService.showSubDistrict(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showAll = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData =
        await this.subDistrictService.showAllSubDistrictsByDistrictId(id);

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

      const responseData = await this.subDistrictService.deleteDistrict(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };
}

module.exports = SubDistrictsController;
