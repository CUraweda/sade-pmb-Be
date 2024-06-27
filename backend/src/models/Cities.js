"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cities.belongsTo(models.provinces, { foreignKey: "province_id" });
      Cities.hasMany(models.districts, { foreignKey: "city_id" });
      Cities.hasMany(models.candidates, { foreignKey: "city_id" });
    }
  }
  Cities.init(
    {
      province_id: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "cities",
      modelName: "cities",
      timestamps: false,
      underscored: true,
    }
  );
  return Cities;
};
