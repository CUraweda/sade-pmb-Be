"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Relationship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Relationship.belongsTo(models.candidates, {
        foreignKey: "candidate_id",
      });
    }
  }
  Relationship.init(
    {
      candidate_id: DataTypes.INTEGER,
      questions: DataTypes.STRING,
      answers: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "family_relationship",
      modelName: "relationship",
      underscored: true,
    }
  );
  return Relationship;
};
