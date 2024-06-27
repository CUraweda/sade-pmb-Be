const httpStatus = require("http-status");
const RelationshipDao = require("../dao/RelationshipDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class RelationshipService {
  constructor() {
    this.relationshipDao = new RelationshipDao();
  }

  createRelationship = async (reqBody) => {
    try {
      let message = "Relationship successfully added.";

      let relationshipData = await this.relationshipDao.create(reqBody);

      if (!relationshipData) {
        message = "Failed to add Relationship.";
        return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
      }

      return responseHandler.returnSuccess(
        httpStatus.CREATED,
        message,
        relationshipData
      );
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  updateRelationship = async (id, body) => {
    const message = "Relationship successfully updated!";

    let relationship = await this.relationshipDao.findById(id);

    if (!relationship) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Relationship not found!"
      );
    }

    const updateData = await this.relationshipDao.updateWhere(
      {
        questions: body.questions,
        answers: body.answers,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showRelationship = async (id) => {
    const message = "Relationship successfully retrieved!";

    let relationship = await this.relationshipDao.findById(id);

    if (!relationship) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Relationship not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, relationship);
  };

  showAllRelationshipByCandidateId = async (candidate_id) => {
    const message = "All Relationship successfully retrieved!";

    let relationship = await this.relationshipDao.findByWhere({ candidate_id });

    if (!relationship) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Relationship not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, relationship);
  };

  deleteRelationship = async (id) => {
    const message = "Relationship successfully deleted!";

    let relationship = await this.relationshipDao.deleteByWhere({ id });

    if (!relationship) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Relationship not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, relationship);
  };
}
module.exports = RelationshipService;
