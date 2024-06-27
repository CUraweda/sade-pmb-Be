const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Parents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Parents.belongsTo(models.candidates, {
        foreignKey: "candidate_id",
      });
    }
  }
  Parents.init(
    {
      candidate_id: DataTypes.INTEGER,
      parent_type: DataTypes.STRING,
      nik: DataTypes.STRING,
      name: DataTypes.STRING,
      pob: DataTypes.STRING,
      dob: DataTypes.DATE,
      citizen: DataTypes.STRING,
      religion: DataTypes.STRING,
      marriage_to: DataTypes.INTEGER,
      in_age: DataTypes.INTEGER,
      relationship_to_candidate: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      com_priority: DataTypes.STRING,
      last_education: DataTypes.STRING,
      major: DataTypes.STRING,
      occupation: DataTypes.STRING,
      salary: DataTypes.STRING,
      field_of_work: DataTypes.STRING,
      field_of_work_others: DataTypes.STRING,
      position: DataTypes.STRING,
      position_others: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "parents",
      modelName: "parents",
      underscored: true,
    }
  );
  return Parents;
};
