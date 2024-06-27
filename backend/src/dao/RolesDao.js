const SuperDao = require("./SuperDao");
const models = require("../models");

const Roles = models.roles;

class RolesDao extends SuperDao {
  constructor() {
    super(Roles);
  }
}

module.exports = RolesDao;
