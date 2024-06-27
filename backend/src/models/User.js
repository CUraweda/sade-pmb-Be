const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //  User.belongsTo(models.agency, { foreignKey: 'agency_id', targetKey: 'id' });
      User.hasMany(models.candidates, { foreignKey: "user_id" });
      User.hasMany(models.payments, { foreignKey: "user_id" });
      User.belongsTo(models.roles, { foreignKey: "role_id" });
    }
  }

  User.init(
    {
      uuid: DataTypes.UUID,
      role_id: DataTypes.INTEGER,
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.INTEGER,
      email_verified: DataTypes.INTEGER,
      address: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      image_url: DataTypes.STRING,
      reg_state: DataTypes.INTEGER,
      active_state: DataTypes.INTEGER,
      reset_token: DataTypes.STRING,
      reset_token_exp: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "users",
      modelName: "user",
      underscored: true,
    }
  );
  return User;
};
