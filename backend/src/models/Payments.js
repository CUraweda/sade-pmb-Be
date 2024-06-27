"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payments.belongsTo(models.user, {
        foreignKey: "user_id",
      });
    }
  }
  Payments.init(
    {
      user_id: DataTypes.INTEGER,
      order_id: DataTypes.STRING,
      payment_type: DataTypes.STRING,
      gross_amount: DataTypes.DOUBLE,
      transaction_status: DataTypes.STRING,
      response_midtrans: DataTypes.TEXT,
      full_payment: DataTypes.BOOLEAN,
      remark: DataTypes.STRING,
      payment_proof: DataTypes.STRING,
      mime_type: DataTypes.STRING,
      invoice_path: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "payments",
      modelName: "payments",
      underscored: true,
    }
  );
  return Payments;
};
