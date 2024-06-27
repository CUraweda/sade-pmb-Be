"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Senses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Senses.belongsTo(models.candidates, {
        foreignKey: "candidate_id",
      });
    }
  }
  Senses.init(
    {
      candidate_id: DataTypes.INTEGER,
      criteria: DataTypes.STRING,
      ability: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "senses",
      modelName: "senses",
      underscored: true,
    }
  );
  return Senses;
};
