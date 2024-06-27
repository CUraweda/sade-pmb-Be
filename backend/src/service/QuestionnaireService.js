const httpStatus = require("http-status");
const QuestionnaireDao = require("../dao/QuestionnaireDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class QuestionnaireService {
  constructor() {
    this.questionnaireDao = new QuestionnaireDao();
  }

  createQue = async (reqBody) => {
    try {
      let message = "Questionnaire successfully added.";

      let data = await this.questionnaireDao.create(reqBody);

      if (!data) {
        message = "Failed to add questionnaire.";
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

  updateQue = async (id, body) => {
    const message = "Questionnaire successfully updated!";

    let que = await this.questionnaireDao.findById(id);

    if (!que) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Questionnaire not found!"
      );
    }

    const updateData = await this.questionnaireDao.updateWhere(
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

  showQue = async (id) => {
    const message = "Questionnaire successfully retrieved!";

    let que = await this.questionnaireDao.findById(id);

    if (!que) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Questionnaire not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, que);
  };

  showAllQueByCandidateId = async (candidate_id) => {
    const message = "All questionnaire successfully retrieved!";

    let que = await this.questionnaireDao.findByWhere({ candidate_id });

    if (!que) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Questionnaire not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, que);
  };

  deleteQue = async (id) => {
    const message = "Questionnaire successfully deleted!";

    let que = await this.questionnaireDao.deleteByWhere({ id });

    if (!que) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Questionnaire not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, que);
  };
}
module.exports = QuestionnaireService;
