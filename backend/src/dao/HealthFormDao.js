const SuperDao = require("./SuperDao");
const models = require("../models");

const HealthForm = models.healthform;
const Candidates = models.candidates;

class HealthFormDao extends SuperDao {
  constructor() {
    super(HealthForm);
  }

  async getById(id) {
    return HealthForm.findAll({
      where: { id },
      include: [
        {
          model: Candidates,
          attributes: ["id", "full_name", "pob", "dob", "residence_addr"],
        },
      ],
    });
  }

  async getByCandidateId(candidate_id) {
    return HealthForm.findAll({
      where: { candidate_id },
      include: [
        {
          model: Candidates,
          attributes: ["id", "full_name", "pob", "dob", "residence_addr"],
        },
      ],
    });
  }
}

module.exports = HealthFormDao;
