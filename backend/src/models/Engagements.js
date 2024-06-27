"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Engagements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Engagements.belongsTo(models.candidates, {
        foreignKey: "candidate_id",
      });
    }
  }
  Engagements.init(
    {
      candidate_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
      father: DataTypes.STRING,
      mother: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "engagements",
      modelName: "engagements",
      underscored: true,
    }
  );
  return Engagements;
};
