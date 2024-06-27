const SuperDao = require("./SuperDao");
const models = require("../models");

const Siblings = models.siblings;

class SiblingsDao extends SuperDao {
  constructor() {
    super(Siblings);
  }

  async findByName(name) {
    return Siblings.findOne({ where: { name } });
  }
}

module.exports = SiblingsDao;
