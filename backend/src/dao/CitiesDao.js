const SuperDao = require("./SuperDao");
const models = require("../models");

const Cities = models.cities;

class CitiesDao extends SuperDao {
  constructor() {
    super(Cities);
  }
}

module.exports = CitiesDao;
