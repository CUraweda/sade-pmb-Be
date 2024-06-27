"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubDistricts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SubDistricts.belongsTo(models.districts, { foreignKey: "district_id" });
      SubDistricts.hasMany(models.candidates, {
        foreignKey: "sub_district_id",
      });
    }
  }
  SubDistricts.init(
    {
      district_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "sub_districts",
      modelName: "subdistricts",
      timestamps: false,
      underscored: true,
    }
  );
  return SubDistricts;
};
