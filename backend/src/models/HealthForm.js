const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HealthForm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      HealthForm.belongsTo(models.candidates, {
        foreignKey: "candidate_id",
      });
    }
  }
  HealthForm.init(
    {
      candidate_id: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      address: DataTypes.STRING,
      parent_name: DataTypes.STRING,
      handphone: DataTypes.STRING,
      blood_type: DataTypes.STRING,
      health_insurance_no: DataTypes.STRING,
      emergency_contact_one: DataTypes.STRING,
      emergency_contact_two: DataTypes.STRING,
      phone_one: DataTypes.STRING,
      phone_two: DataTypes.STRING,
      hospital_one: DataTypes.STRING,
      hospital_two: DataTypes.STRING,
      doctor_one: DataTypes.STRING,
      doctor_two: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "health_form",
      modelName: "healthform",
      underscored: true,
    }
  );
  return HealthForm;
};
