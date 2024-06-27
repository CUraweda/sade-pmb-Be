const httpStatus = require("http-status");
const NotificationsDao = require("../dao/NotificationsDao");
const responseHandler = require("../helper/responseHandler");
const logger = require("../config/logger");

class NotificationService {
  constructor() {
    this.notificationsDao = new NotificationsDao();
  }

  createNotification = async (reqBody) => {
    try {
      let message = "Notification successfully added.";

      let data = await this.notificationsDao.create(reqBody);

      if (!data) {
        message = "Failed to add notification.";
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

  updateNotification = async (id, body) => {
    const message = "Notification successfully updated!";

    let data = await this.notificationsDao.findById(id);

    if (!data) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Notification not found!"
      );
    }

    const updateData = await this.notificationsDao.updateWhere(
      {
        code: body.code,
        name: body.name,
      },
      { id }
    );

    if (updateData) {
      return responseHandler.returnSuccess(httpStatus.OK, message, {});
    }
  };

  showNotification = async (id) => {
    const message = "Notification successfully retrieved!";

    let data = await this.notificationsDao.findById(id);

    if (!data) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Notification not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, data);
  };

  showAllNotifications = async () => {
    const message = "All notification successfully retrieved!";

    let data = await this.notificationsDao.findAll();

    if (!data) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "notification not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, data);
  };

  deleteNotification = async (id) => {
    const message = "Notification successfully deleted!";

    let data = await this.notificationsDao.deleteByWhere({ id });

    if (!data) {
      return responseHandler.returnError(
        httpStatus.NOT_FOUND,
        "Notification not found!"
      );
    }

    return responseHandler.returnSuccess(httpStatus.OK, message, data);
  };
}
module.exports = NotificationService;
