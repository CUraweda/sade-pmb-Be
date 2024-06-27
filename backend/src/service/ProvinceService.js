const httpStatus = require("http-status");
const ProvincesDao = require("../dao/ProvincesDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class ProvinceService {
  constructor() {
    this.provincesDao = new ProvincesDao();
  }

  createProvince = async (reqBody) => {
    try {
      let message = "Province successfully added.";

      let data = await this.provincesDao.create(reqBody);

      if (!data) {
        message = "Failed to add province.";
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

  updateProvince = async (id, body) => {
    const message = "Province successfully updated!";

    let province = await this.provincesDao.findById(id);

    if (!province) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Province not found!"
      );
    }

    const updateData = await this.provincesDao.updateWhere(
      {
        name: body.name,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showProvince = async (id) => {
    const message = "Province successfully retrieved!";

    let province = await this.provincesDao.findById(id);

    if (!province) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Province not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, province);
  };

  showAllProvinces = async () => {
    const message = "All provinces successfully retrieved!";

    let provinces = await this.provincesDao.findAll();

    if (!provinces) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Province not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, provinces);
  };

  deleteProvince = async (id) => {
    const message = "Province successfully deleted!";

    let province = await this.provincesDao.deleteByWhere({ id });

    if (!province) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Province not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, province);
  };
}
module.exports = ProvinceService;
