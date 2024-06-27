const SuperDao = require("./SuperDao");
const models = require("../models");

const Relationship = models.relationship;

class RelationshipDao extends SuperDao {
  constructor() {
    super(Relationship);
  }
}

module.exports = RelationshipDao;
