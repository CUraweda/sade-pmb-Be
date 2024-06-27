const SuperDao = require("./SuperDao");
const models = require("../models");

const SubDistricts = models.subdistricts;

class SubDistrictsDao extends SuperDao {
  constructor() {
    super(SubDistricts);
  }
}

module.exports = SubDistrictsDao;
