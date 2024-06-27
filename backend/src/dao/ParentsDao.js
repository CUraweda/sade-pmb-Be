const SuperDao = require("./SuperDao");
const models = require("../models");

const Parents = models.parents;
const Candidates = models.candidates;

class ParentsDao extends SuperDao {
  constructor() {
    super(Parents);
  }

  async getAll() {
    return Parents.findAll({
      include: [
        {
          model: Candidates,
          // attributes: ["id", "name"],
        },
      ],
    });
  }

  async getAllByCandidateId(candidate_id) {
    return Parents.findAll({
      where: { candidate_id },
      include: [
        {
          model: Candidates,
          // attributes: ["id", "name"],
        },
      ],
    });
  }
}

module.exports = ParentsDao;
