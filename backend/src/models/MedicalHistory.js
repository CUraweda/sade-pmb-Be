"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MedicalHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MedicalHistory.belongsTo(models.candidates, {
        foreignKey: "candidate_id",
      });
    }
  }
  MedicalHistory.init(
    {
      candidate_id: DataTypes.INTEGER,
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "medical_history",
      modelName: "medicalhistory",
      underscored: true,
    }
  );
  return MedicalHistory;
};
