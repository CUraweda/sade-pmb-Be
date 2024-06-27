const SuperDao = require("./SuperDao");
const models = require("../models");

const Provinces = models.provinces;

class ProvincesDao extends SuperDao {
  constructor() {
    super(Provinces);
  }
}

module.exports = ProvincesDao;
