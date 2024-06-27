const SuperDao = require("./SuperDao");
const models = require("../models");

const Senses = models.senses;

class SensesDao extends SuperDao {
  constructor() {
    super(Senses);
  }
}

module.exports = SensesDao;
