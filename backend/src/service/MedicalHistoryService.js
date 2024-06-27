const httpStatus = require("http-status");
const MedicalHistoryDao = require("../dao/MedicalHistoryDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class MedicalHistoryService {
  constructor() {
    this.medicalHistoryDao = new MedicalHistoryDao();
  }

  createMedicalHistory = async (reqBody) => {
    try {
      let message = "Medical history data successfully added.";

      let medicalHistoryData = await this.medicalHistoryDao.create(reqBody);

      if (!medicalHistoryData) {
        message = "Failed to add medical history data.";
        return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
      }

      return responseHandler.returnSuccess(
        httpStatus.CREATED,
        message,
        medicalHistoryData
      );
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  updateMedicalHistory = async (id, body) => {
    const message = "Medical history data successfully updated!";

    let medicalHistoryData = await this.medicalHistoryDao.findById(id);

    if (!medicalHistoryData) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Medical history data not found!"
      );
    }

    const updateData = await this.medicalHistoryDao.updateWhere(
      {
        question: body.question,
        answer: body.answer,
        description: body.description,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showMedicalHistory = async (id) => {
    const message = "Medical history data successfully retrieved!";

    let medicalHistoryData = await this.medicalHistoryDao.findById(id);

    if (!medicalHistoryData) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Medical history data not found!"
      );
    }

    return responseHandler.returnSuccess(
      httpStatus.OK,
      message,
      medicalHistoryData
    );
  };

  showAllMedicalHistoryByCandidateId = async (candidate_id) => {
    const message = "All medical history data successfully retrieved!";

    let medicalHistoryData = await this.medicalHistoryDao.findByWhere({
      candidate_id,
    });

    if (!medicalHistoryData) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Medical history data not found!"
      );
    }

    return responseHandler.returnSuccess(
      httpStatus.OK,
      message,
      medicalHistoryData
    );
  };

  deleteMedicalHistory = async (id) => {
    const message = "Medical history data successfully deleted!";

    let medicalHistoryData = await this.medicalHistoryDao.deleteByWhere({ id });

    if (!medicalHistoryData) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Medical history data not found!"
      );
    }

    return responseHandler.returnSuccess(
      httpStatus.OK,
      message,
      medicalHistoryData
    );
  };
}
module.exports = MedicalHistoryService;
