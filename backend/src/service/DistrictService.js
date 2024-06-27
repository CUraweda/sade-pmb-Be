const httpStatus = require("http-status");
const DistrictsDao = require("../dao/DistrictsDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class DistrictService {
  constructor() {
    this.districtsDao = new DistrictsDao();
  }

  createDistrict = async (reqBody) => {
    try {
      let message = "District successfully added.";

      let data = await this.districtsDao.create(reqBody);

      if (!data) {
        message = "Failed to add district.";
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

  updateDistrict = async (id, body) => {
    const message = "District successfully updated!";

    let district = await this.districtsDao.findById(id);

    if (!district) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "District not found!"
      );
    }

    const updateData = await this.districtsDao.updateWhere(
      {
        city_id: body.city_id,
        name: body.name,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showDistrict = async (id) => {
    const message = "District successfully retrieved!";

    let district = await this.districtsDao.findById(id);

    if (!district) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "District not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, district);
  };

  showAllDistrictsByCityId = async (city_id) => {
    const message = "All district successfully retrieved!";

    let districts = await this.districtsDao.findByWhere({ city_id });

    if (!districts) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "District not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, districts);
  };

  deleteDistricts = async (id) => {
    const message = "District successfully deleted!";

    let district = await this.districtsDao.deleteByWhere({ id });

    if (!district) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "District not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, district);
  };
}
module.exports = DistrictService;
