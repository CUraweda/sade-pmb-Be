"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Announcement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Announcement.belongsTo(models.candidates, { foreignKey: "candidate_id" });
    }
  }
  Announcement.init(
    {
      candidate_id: DataTypes.INTEGER,
      code: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      location: DataTypes.STRING,
      contact_person: DataTypes.STRING,
      school_start_date: DataTypes.DATE,
      remark: DataTypes.STRING,
      result_url: DataTypes.STRING,
      form_url: DataTypes.STRING,
      form_two_url: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "announcements",
      modelName: "announcement",
      timestamps: false,
      underscored: true,
    }
  );
  return Announcement;
};
