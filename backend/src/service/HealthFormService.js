const httpStatus = require("http-status");
const HealthFormDao = require("../dao/HealthFormDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class HealthFormService {
  constructor() {
    this.healthFormDao = new HealthFormDao();
  }

  createHealthForm = async (reqBody) => {
    try {
      let message = "Health form data successfully added.";

      let healthFormData = await this.healthFormDao.create(reqBody);

      if (!healthFormData) {
        message = "Failed to add health form data.";
        return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
      }

      return responseHandler.returnSuccess(
        httpStatus.CREATED,
        message,
        healthFormData
      );
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  updateHealthForm = async (id, body) => {
    const message = "Health form data successfully updated!";

    let healthFormData = await this.healthFormDao.findById(id);

    if (!healthFormData) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Health form data not found!"
      );
    }

    const updateData = await this.healthFormDao.updateWhere(
      {
        weight: body.weight,
        height: body.height,
        address: body.address,
        parent_name: body.parent_name,
        handphone: body.handphone,
        blood_type: body.blood_type,
        health_insurance_no: body.health_insurance_no,
        emergency_contact_one: body.emergency_contact_one,
        emergency_contact_two: body.emergency_contact_two,
        phone_one: body.phone_one,
        phone_two: body.phone_two,
        hospital_one: body.hospital_one,
        hospital_two: body.hospital_two,
        doctor_one: body.doctor_one,
        doctor_two: body.doctor_two,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showHealthForm = async (id) => {
    const message = "Health form data successfully retrieved!";

    let healthFormData = await this.healthFormDao.getById(id);

    if (!healthFormData) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Health form data not found!"
      );
    }

    return responseHandler.returnSuccess(
      httpStatus.OK,
      message,
      healthFormData
    );
  };

  showAllHealthFormByCandidateId = async (candidate_id) => {
    const message = "All health form data successfully retrieved!";

    let healthFormData = await this.healthFormDao.getByCandidateId(
      candidate_id
    );

    if (!healthFormData) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Health form data not found!"
      );
    }

    return responseHandler.returnSuccess(
      httpStatus.OK,
      message,
      healthFormData
    );
  };

  deleteHealthForm = async (id) => {
    const message = "Health form data successfully deleted!";

    let healthFormData = await this.healthFormDao.deleteByWhere({ id });

    if (!healthFormData) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Health form data not found!"
      );
    }

    return responseHandler.returnSuccess(
      httpStatus.OK,
      message,
      healthFormData
    );
  };
}
module.exports = HealthFormService;
