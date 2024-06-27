const httpStatus = require("http-status");
const EngagementsDao = require("../dao/EngagementsDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class EngagementService {
  constructor() {
    this.engagementsDao = new EngagementsDao();
  }

  createEngagement = async (reqBody) => {
    try {
      let message = "Engagement successfully added.";

      let data = await this.engagementsDao.create(reqBody);

      if (!data) {
        message = "Failed to add engagement.";
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

  updateEngagement = async (id, body) => {
    const message = "Engagement successfully updated!";

    let engagement = await this.engagementsDao.findById(id);

    if (!engagement) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Engagement not found!"
      );
    }

    const updateData = await this.engagementsDao.updateWhere(
      {
        description: body.description,
        father: body.father,
        mother: body.mother,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showEngagement = async (id) => {
    const message = "Engagement successfully retrieved!";

    let engagement = await this.engagementsDao.findById(id);

    if (!engagement) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Engagement not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, engagement);
  };

  showAllEngagementsByCandidateId = async (candidate_id) => {
    const message = "All engagements successfully retrieved!";

    let engagements = await this.engagementsDao.findByWhere({ candidate_id });

    if (!engagements) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Engagements not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, engagements);
  };

  deleteEngagement = async (id) => {
    const message = "Engagement successfully deleted!";

    let engagement = await this.engagementsDao.deleteByWhere({ id });

    if (!engagement) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Engagement not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, engagement);
  };
}
module.exports = EngagementService;
