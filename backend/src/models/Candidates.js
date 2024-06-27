const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Candidates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Candidates.belongsTo(models.user, { foreignKey: "user_id" });
      Candidates.belongsTo(models.provinces, { foreignKey: "province_id" });
      Candidates.belongsTo(models.cities, { foreignKey: "city_id" });
      Candidates.belongsTo(models.districts, { foreignKey: "district_id" });
      Candidates.belongsTo(models.subdistricts, {
        foreignKey: "sub_district_id",
      });
      Candidates.hasMany(models.engagements, { foreignKey: "candidate_id" });
      Candidates.hasMany(models.siblings, { foreignKey: "candidate_id" });
      Candidates.hasMany(models.parents, { foreignKey: "candidate_id" });
      Candidates.hasMany(models.healthform, { foreignKey: "candidate_id" });
      Candidates.hasMany(models.medicalhistory, { foreignKey: "candidate_id" });
      Candidates.hasMany(models.globalattachment, {
        foreignKey: "candidate_id",
      });
      Candidates.hasMany(models.relationship, { foreignKey: "candidate_id" });
      Candidates.hasMany(models.senses, { foreignKey: "candidate_id" });
      Candidates.hasMany(models.questionnaire, { foreignKey: "candidate_id" });
      Candidates.hasMany(models.announcement, { foreignKey: "candidate_id" });
      Candidates.hasMany(models.healthform, { foreignKey: "candidate_id" });
      Candidates.hasMany(models.senses, { foreignKey: "candidate_id" });
      Candidates.hasMany(models.filetemplate, { foreignKey: "candidate_id" });
    }
  }
  Candidates.init(
    {
      user_id: DataTypes.INTEGER,
      nisn: DataTypes.STRING,
      full_name: DataTypes.STRING,
      nick_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      dob: DataTypes.DATE,
      pob: DataTypes.STRING,
      birth_order: DataTypes.INTEGER,
      number_of_siblings: DataTypes.INTEGER,
      province_id: DataTypes.INTEGER,
      city_id: DataTypes.INTEGER,
      district_id: DataTypes.INTEGER,
      sub_district_id: DataTypes.BIGINT,
      residence_addr: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      education_level: DataTypes.STRING,
      class: DataTypes.STRING,
      origin_pg: DataTypes.STRING,
      origin_kgarten: DataTypes.STRING,
      origin_elementary: DataTypes.STRING,
      origin_secondary: DataTypes.STRING,
      is_transfer: DataTypes.BOOLEAN,
      last_class: DataTypes.STRING,
      address_school: DataTypes.STRING,
      remark: DataTypes.STRING,
      form_path: DataTypes.STRING,
      status_class: DataTypes.INTEGER,
      is_graduated: DataTypes.BOOLEAN,
      approved: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      tableName: "candidates",
      modelName: "candidates",
      underscored: true,
    }
  );
  return Candidates;
};
