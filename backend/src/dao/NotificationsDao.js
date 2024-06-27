const SuperDao = require("./SuperDao");
const models = require("../models");

const Notifications = models.notifications;

class NotificationsDao extends SuperDao {
  constructor() {
    super(Notifications);
  }
}

module.exports = NotificationsDao;
