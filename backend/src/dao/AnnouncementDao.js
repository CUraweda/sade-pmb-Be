const SuperDao = require("./SuperDao");
const models = require("../models");

const Announcement = models.announcement;
const Candidates = models.candidates;

class AnnouncementDao extends SuperDao {
  constructor() {
    super(Announcement);
  }

  async findAllData() {
    return Announcement.findAll({ include: Candidates });
  }
}

module.exports = AnnouncementDao;
