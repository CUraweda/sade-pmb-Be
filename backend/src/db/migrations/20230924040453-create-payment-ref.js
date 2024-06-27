"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payment_ref", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING,
      },
      level: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.STRING,
      },
      sub_desc: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.DOUBLE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("payment_ref");
  },
};
