const httpStatus = require("http-status");
const SubDistrictsDao = require("../dao/SubDistrictsDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class SubDistrictService {
  constructor() {
    this.subDistrictsDao = new SubDistrictsDao();
  }

  createSubDistrict = async (reqBody) => {
    try {
      let message = "Sub district successfully added.";

      let data = await this.subDistrictsDao.create(reqBody);

      if (!data) {
        message = "Failed to add sub district.";
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

  updateSubDistrict = async (id, body) => {
    const message = "Sub district successfully updated!";

    let subdistrict = await this.subDistrictsDao.findById(id);

    if (!subdistrict) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Sub district not found!"
      );
    }

    const updateData = await this.subDistrictsDao.updateWhere(
      {
        district_id: body.district_id,
        name: body.name,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showSubDistrict = async (id) => {
    const message = "Sub district successfully retrieved!";

    let subdistrict = await this.subDistrictsDao.findById(id);

    if (!subdistrict) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Sub district not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, subdistrict);
  };

  showAllSubDistrictsByDistrictId = async (district_id) => {
    const message = "All sub district successfully retrieved!";

    let subdistricts = await this.subDistrictsDao.findByWhere({ district_id });

    if (!subdistricts) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        " Sub district not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, subdistricts);
  };

  deleteSubDistricts = async (id) => {
    const message = "Sub district successfully deleted!";

    let subdistrict = await this.subDistrictsDao.deleteByWhere({ id });

    if (!subdistrict) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "District not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, subdistrict);
  };
}
module.exports = SubDistrictService;
