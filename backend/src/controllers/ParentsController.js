const httpStatus = require("http-status");
const AuthService = require("../service/AuthService");
const UserService = require("../service/UserService");
const ParentService = require("../service/ParentService");
const logger = require("../config/logger");
const { JSON } = require("sequelize");

class ParentsController {
  constructor() {
    this.userService = new UserService();
    this.authService = new AuthService();
    this.parentService = new ParentService();
  }

  create = async (req, res) => {
    try {
      const responseData = await this.parentService.createParent(req.body);

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
        this.parentService.createParent(data[key]);
      }

      res.status(httpStatus.CREATED).send({
        status: true,
        code: httpStatus.CREATED,
        message: "Parents successfully added.",
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

      const responseData = await this.parentService.updateParent(id, req.body);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  updateBulk = async (req, res) => {
    try {
      var id = req.params.id;

      // console.log(req.body.data[0].id);
      const data = req.body.data;
      for (const key in data) {
        var reqData = {
          parent_type: data[key].parent_type,
          nik: data[key].nik,
          name: data[key].name,
          pob: data[key].pob,
          dob: data[key].dob,
          citizen: data[key].citizen,
          religion: data[key].religion,
          marriage_to: data[key].marriage_to,
          in_age: data[key].in_age,
          relationship_to_candidate: data[key].relationship_to_candidate,
          address: data[key].address,
          phone: data[key].phone,
          email: data[key].email,
          com_priority: data[key].com_priority,
          last_education: data[key].last_education,
          major: data[key].major,
          occupation: data[key].occupation,
          salary: data[key].salary,
          field_of_work: data[key].field_of_work,
          field_of_work_others: data[key].field_of_work_others,
          position: data[key].position,
          position_others: data[key].position_others,
        };
        this.parentService.updateParent(data[key].id, reqData);
      }

      // const responseData = await this.parentService.updateParent(id, req.body);

      // const { message, data } = responseData.response;

      // res.status(responseData.statusCode).send(responseData.response);
      res.status(httpStatus.CREATED).send({
        status: true,
        code: httpStatus.OK,
        message: "Parents successfully updated.",
        data,
      });
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  show = async (req, res) => {
    try {
      var id = req.params.id;

      const responseData = await this.parentService.showParent(id);

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

      const responseData = await this.parentService.showAllParentsByCandidateId(
        id
      );

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };

  showAll = async (req, res) => {
    try {
      const responseData = await this.parentService.showAllParents();

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

      const responseData = await this.parentService.deleteParent(id);

      const { message, data } = responseData.response;

      res.status(responseData.statusCode).send(responseData.response);
    } catch (e) {
      logger.error(e);
      res.status(httpStatus.BAD_GATEWAY).send(e);
    }
  };
}

module.exports = ParentsController;
