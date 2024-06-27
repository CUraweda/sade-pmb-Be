"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FileTemplate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FileTemplate.belongsTo(models.candidates, {
        foreignKey: "candidate_id",
      });
    }
  }
  FileTemplate.init(
    {
      candidate_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      mime_type: DataTypes.STRING,
      path: DataTypes.STRING,
      filename: DataTypes.STRING,
      original_filename: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "file_templates",
      modelName: "filetemplate",
      underscored: true,
    }
  );
  return FileTemplate;
};
