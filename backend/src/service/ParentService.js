const httpStatus = require("http-status");
const ParentsDao = require("../dao/ParentsDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class ParentService {
  constructor() {
    this.parentsDao = new ParentsDao();
  }

  createParent = async (reqBody) => {
    try {
      let message = "Parent successfully added.";

      let parentsData = await this.parentsDao.create(reqBody);

      if (!parentsData) {
        message = "Failed to add parent.";
        return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
      }

      return responseHandler.returnSuccess(
        httpStatus.CREATED,
        message,
        parentsData
      );
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  updateParent = async (id, body) => {
    const message = "Parent successfully updated!";

    let parent = await this.parentsDao.findById(id);

    if (!parent) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Parent not found!"
      );
    }

    const updateData = await this.parentsDao.updateWhere(
      {
        parent_type: body.parent_type,
        nik: body.nik,
        name: body.name,
        pob: body.pob,
        dob: body.dob,
        citizen: body.citizen,
        religion: body.religion,
        marriage_to: body.marriage_to,
        in_age: body.in_age,
        relationship_to_candidate: body.relationship_to_candidate,
        address: body.address,
        phone: body.phone,
        email: body.email,
        com_priority: body.com_priority,
        last_education: body.last_education,
        major: body.major,
        occupation: body.occupation,
        salary: body.salary,
        field_of_work: body.field_of_work,
        field_of_work_others: body.field_of_work_others,
        position: body.position,
        position_others: body.position_others,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showParent = async (id) => {
    const message = "Parent successfully retrieved!";

    let parent = await this.parentsDao.findById(id);

    if (!parent) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Parent not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, parent);
  };

  showAllParentsByCandidateId = async (candidate_id) => {
    const message = "All parents successfully retrieved!";

    let parents = await this.parentsDao.getAllByCandidateId(candidate_id);

    if (!parents) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Parents not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, parents);
  };

  showAllParents = async (candidate_id) => {
    const message = "All parents successfully retrieved!";

    let parents = await this.parentsDao.getAll();

    if (!parents) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Parents not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, parents);
  };

  deleteParent = async (id) => {
    const message = "Parent successfully deleted!";

    let parent = await this.parentsDao.deleteByWhere({ id });

    if (!parent) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Parent not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, parent);
  };
}
module.exports = ParentService;
