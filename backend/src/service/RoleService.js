const httpStatus = require("http-status");
const RolesDao = require("../dao/RolesDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class RoleService {
  constructor() {
    this.rolesDao = new RolesDao();
  }

  createRole = async (reqBody) => {
    try {
      let message = "Role successfully added.";

      let data = await this.rolesDao.create(reqBody);

      if (!data) {
        message = "Failed to add role.";
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

  updateRole = async (id, body) => {
    const message = "Role successfully updated!";

    let role = await this.rolesDao.findById(id);

    if (!role) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Role not found!"
      );
    }

    const updateData = await this.rolesDao.updateWhere(
      {
        code: body.code,
        name: body.name,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showRole = async (id) => {
    const message = "Role successfully retrieved!";

    let role = await this.rolesDao.findById(id);

    if (!role) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Role not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, role);
  };

  showAllRoles = async () => {
    const message = "All role successfully retrieved!";

    let roles = await this.rolesDao.findAll();

    if (!roles) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Role not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, roles);
  };

  deleteRole = async (id) => {
    const message = "Role successfully deleted!";

    let role = await this.rolesDao.deleteByWhere({ id });

    if (!role) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Role not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, role);
  };
}
module.exports = RoleService;
