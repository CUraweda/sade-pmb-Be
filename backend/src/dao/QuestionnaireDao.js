const SuperDao = require("./SuperDao");
const models = require("../models");

const Questionnaire = models.questionnaire;

class QuestionnaireDao extends SuperDao {
  constructor() {
    super(Questionnaire);
  }
}

module.exports = QuestionnaireDao;
