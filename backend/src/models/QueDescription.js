"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QueDescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      QueDescription.belongsTo(models.quecategory, {
        foreignKey: "que_category_id",
      });
    }
  }
  QueDescription.init(
    {
      que_category_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "que_description",
      modelName: "quedescription",
      underscored: true,
    }
  );
  return QueDescription;
};
