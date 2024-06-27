const SuperDao = require("./SuperDao");
const models = require("../models");

const GlobalAttachment = models.globalattachment;

class GlobalAttachmentDao extends SuperDao {
  constructor() {
    super(GlobalAttachment);
  }
}

module.exports = GlobalAttachmentDao;
