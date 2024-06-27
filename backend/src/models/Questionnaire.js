"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Questionnaire extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Questionnaire.belongsTo(models.candidates, {
        foreignKey: "candidate_id",
      });
    }
  }
  Questionnaire.init(
    {
      candidate_id: DataTypes.INTEGER,
      questions: DataTypes.STRING,
      answers: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "questionnaire",
      modelName: "questionnaire",
      underscored: true,
    }
  );
  return Questionnaire;
};
