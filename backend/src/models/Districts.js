"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Districts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Districts.belongsTo(models.cities, { foreignKey: "city_id" });
      Districts.hasMany(models.candidates, { foreignKey: "district_id" });
    }
  }
  Districts.init(
    {
      city_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "districts",
      modelName: "districts",
      timestamps: false,
      underscored: true,
    }
  );
  return Districts;
};
