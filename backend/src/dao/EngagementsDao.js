const SuperDao = require("./SuperDao");
const models = require("../models");

const Engagements = models.engagements;

class EngagementsDao extends SuperDao {
  constructor() {
    super(Engagements);
  }
}

module.exports = EngagementsDao;
