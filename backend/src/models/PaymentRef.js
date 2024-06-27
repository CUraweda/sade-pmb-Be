"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PaymentRef extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentRef.init(
    {
      code: DataTypes.STRING,
      level: DataTypes.STRING,
      desc: DataTypes.STRING,
      sub_desc: DataTypes.STRING,
      amount: DataTypes.DOUBLE,
    },
    {
      sequelize,
      tableName: "payment_ref",
      modelName: "paymentref",
      timestamps: false,
      underscored: true,
    }
  );
  return PaymentRef;
};
