"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      order_id: {
        type: Sequelize.STRING,
      },
      payment_type: {
        type: Sequelize.STRING,
      },
      gross_amount: {
        type: Sequelize.DOUBLE,
      },
      transaction_status: {
        type: Sequelize.STRING,
      },
      response_midtrans: {
        type: Sequelize.TEXT,
      },
      full_payment: {
        type: Sequelize.BOOLEAN,
      },
      remark: {
        type: Sequelize.STRING,
      },
      payment_proof: {
        type: Sequelize.STRING,
      },
      mime_type: {
        type: Sequelize.STRING,
      },
      invoice_path: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("payments");
  },
};
