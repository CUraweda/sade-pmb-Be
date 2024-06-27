"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Provinces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Provinces.hasMany(models.cities, { foreignKey: "province_id" });
      Provinces.hasMany(models.candidates, { foreignKey: "province_id" });
    }
  }
  Provinces.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "provinces",
      modelName: "provinces",
      timestamps: false,
      underscored: true,
    }
  );
  return Provinces;
};
