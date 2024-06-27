const httpStatus = require("http-status");
const AnnouncementDao = require("../dao/AnnouncementDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class AnnouncementService {
  constructor() {
    this.announcementDao = new AnnouncementDao();
  }

  createAnnouncement = async (reqBody) => {
    try {
      let message = "Announcement successfully added.";
      console.log("REQ BODY" + JSON.stringify(reqBody));
      let data = await this.announcementDao.create(reqBody);

      if (!data) {
        message = "Failed to add announcement.";
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

  updateAnnouncement = async (id, req) => {
    const message = "Announcement successfully updated!";

    let ann = await this.announcementDao.findById(id);

    if (!ann) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Announcement not found!"
      );
    }

    const updateData = await this.announcementDao.updateWhere(
      {
        candidate_id: req.body.candidate_id,
        code: req.body.code,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        location: req.body.location,
        contact_person: req.body.contact_person,
        school_start_date: req.body.school_start_date,
        remark: req.body.remark,
        result_url: req.file == undefined ? null : req.file.path,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  uploadForm = async (id, req) => {
    try {
      let message = "Attachment successfully uploaded.";

      const updateData = await this.announcementDao.updateWhere(
        {
          form_url: req.file == undefined ? null : req.file.path,
        },
        { id }
      );

      if (updateData) {
        return responseHandler.returnSuccess(httpStatus.OK, message, {
          form_url: req.file.path,
        });
      }
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  uploadFormTwo = async (id, req) => {
    try {
      let message = "Attachment successfully uploaded.";

      const updateData = await this.announcementDao.updateWhere(
        {
          form_two_url: req.file == undefined ? null : req.file.path,
        },
        { id }
      );

      if (updateData) {
        return responseHandler.returnSuccess(httpStatus.OK, message, {
          form_two_url: req.file.path,
        });
      }
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  uploadResult = async (id, req) => {
    try {
      let message = "Attachment successfully uploaded.";

      const updateData = await this.announcementDao.updateWhere(
        {
          result_url: req.file == undefined ? null : req.file.path,
        },
        { id }
      );

      if (updateData) {
        return responseHandler.returnSuccess(httpStatus.OK, message, {
          result_url: req.file.path,
        });
      }
    } catch (e) {
      logger.error(e);
      return responseHandler.returnError(
        httpStatus.BAD_REQUEST,
        "Something went wrong!"
      );
    }
  };

  showAnnouncement = async (id) => {
    const message = "Announcement successfully retrieved!";

    let ann = await this.announcementDao.findById(id);

    if (!ann) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Announcement not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, ann);
  };

  showAllAnnouncementByCandidateId = async (candidate_id) => {
    const message = "All announcement successfully retrieved!";

    let ann = await this.announcementDao.findByWhere({ candidate_id });

    if (!ann) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Announcement not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, ann);
  };

  showAll = async () => {
    const message = "All announcements successfully retrieved!";

    let ann = await this.announcementDao.findAllData();

    if (!ann) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Announcements not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, ann);
  };

  deleteAnnouncement = async (id) => {
    const message = "Announcement successfully deleted!";

    let ann = await this.announcementDao.deleteByWhere({ id });

    if (!ann) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Announcement not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, ann);
  };
}
module.exports = AnnouncementService;
