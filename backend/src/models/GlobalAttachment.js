"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GlobalAttachment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      GlobalAttachment.belongsTo(models.candidates, {
        foreignKey: "candidate_id",
      });
    }
  }
  GlobalAttachment.init(
    {
      candidate_id: DataTypes.INTEGER,
      attachment_type: DataTypes.STRING,
      mime_type: DataTypes.STRING,
      path: DataTypes.STRING,
      filename: DataTypes.STRING,
      original_filename: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "global_attachment",
      modelName: "globalattachment",
      underscored: true,
    }
  );
  return GlobalAttachment;
};
