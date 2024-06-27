"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Siblings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Siblings.belongsTo(models.candidates, { foreignKey: "candidate_id" });
    }
  }
  Siblings.init(
    {
      candidate_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      dob: DataTypes.DATE,
      school: DataTypes.STRING,
      class: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "siblings",
      modelName: "siblings",
      underscored: true,
    }
  );
  return Siblings;
};
