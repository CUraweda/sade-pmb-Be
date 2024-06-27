const httpStatus = require("http-status");
const SiblingsDao = require("../dao/SiblingsDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class SiblingService {
  constructor() {
    this.siblingsDao = new SiblingsDao();
  }

  createSibling = async (reqBody) => {
    try {
      let message = "Sibling successfully added.";

      let siblingsData = await this.siblingsDao.create(reqBody);

      if (!siblingsData) {
        message = "Failed to add sibling.";
        return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
      }

      return responseHandler.returnSuccess(
        httpStatus.CREATED,
        message,
        siblingsData
      );
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  updateSibling = async (id, body) => {
    const message = "Sibling successfully updated!";

    let sibling = await this.siblingsDao.findById(id);

    if (!sibling) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Sibling not found!"
      );
    }

    const updateData = await this.siblingsDao.updateWhere(
      {
        name: body.name,
        gender: body.gender,
        dob: body.dob,
        school: body.school,
        class: body.class,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showSibling = async (id) => {
    const message = "Sibling successfully retrieved!";

    let sibling = await this.siblingsDao.findById(id);

    if (!sibling) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Sibling not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, sibling);
  };

  showAllSiblingsByUserId = async (candidate_id) => {
    const message = "All siblings successfully retrieved!";

    let siblings = await this.siblingsDao.findByWhere({ candidate_id });

    if (!siblings) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Siblings not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, siblings);
  };

  deleteSibling = async (id) => {
    const message = "Sibling successfully deleted!";

    let sibling = await this.siblingsDao.deleteByWhere({ id });

    if (!sibling) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Sibling not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, sibling);
  };
}
module.exports = SiblingService;
