const httpStatus = require("http-status");
const CitiesDao = require("../dao/CitiesDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class CityService {
  constructor() {
    this.citiesDao = new CitiesDao();
  }

  createCity = async (reqBody) => {
    try {
      let message = "City successfully added.";

      let data = await this.citiesDao.create(reqBody);

      if (!data) {
        message = "Failed to add city.";
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
    const message = "City successfully updated!";

    let city = await this.citiesDao.findById(id);

    if (!city) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "City not found!"
      );
    }

    const updateData = await this.citiesDao.updateWhere(
      {
        province_id: body.province_id,
        name: body.name,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showCity = async (id) => {
    const message = "City successfully retrieved!";

    let city = await this.citiesDao.findById(id);

    if (!city) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "City not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, city);
  };

  showAllCitiesByProvinceId = async (province_id) => {
    const message = "All city successfully retrieved!";

    let city = await this.citiesDao.findByWhere({ province_id });

    if (!city) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "City not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, city);
  };

  deleteCity = async (id) => {
    const message = "City successfully deleted!";

    let city = await this.citiesDao.deleteByWhere({ id });

    if (!city) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "City not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, city);
  };
}
module.exports = CityService;
