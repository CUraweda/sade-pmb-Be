const httpStatus = require("http-status");
const SensesDao = require("../dao/SensesDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class SenseService {
  constructor() {
    this.sensesDao = new SensesDao();
  }

  createSense = async (reqBody) => {
    try {
      let message = "Sense successfully added.";

      let data = await this.sensesDao.create(reqBody);

      if (!data) {
        message = "Failed to add sense.";
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

  updateSense = async (id, body) => {
    const message = "Sense successfully updated!";

    let sense = await this.sensesDao.findById(id);

    if (!sense) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Sense not found!"
      );
    }

    const updateData = await this.sensesDao.updateWhere(
      {
        criteria: body.criteria,
        ability: body.ability,
        description: body.description,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showSense = async (id) => {
    const message = "Sense successfully retrieved!";

    let sense = await this.sensesDao.findById(id);

    if (!sense) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Sense not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, sense);
  };

  showAllSensesByCandidateId = async (candidate_id) => {
    const message = "All sense successfully retrieved!";

    let sense = await this.sensesDao.findByWhere({ candidate_id });

    if (!sense) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Sense not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, sense);
  };

  deleteSense = async (id) => {
    const message = "Sense successfully deleted!";

    let sense = await this.sensesDao.deleteByWhere({ id });

    if (!sense) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Sense not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, sense);
  };
}
module.exports = SenseService;
