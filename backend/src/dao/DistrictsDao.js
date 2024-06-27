const SuperDao = require("./SuperDao");
const models = require("../models");

const Districts = models.districts;

class DistrictsDao extends SuperDao {
  constructor() {
    super(Districts);
  }
}

module.exports = DistrictsDao;
