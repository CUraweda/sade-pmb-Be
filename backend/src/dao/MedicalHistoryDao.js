const SuperDao = require("./SuperDao");
const models = require("../models");

const MedicalHistory = models.medicalhistory;

class MedicalHistoryDao extends SuperDao {
  constructor() {
    super(MedicalHistory);
  }

  async findByName(name) {
    return MedicalHistory.findOne({ where: { name } });
  }
}

module.exports = MedicalHistoryDao;
