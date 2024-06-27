"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("announcements", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      candidate_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "candidates",
          key: "id",
        },
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      start_date: {
        type: Sequelize.DATE,
      },
      end_date: {
        type: Sequelize.DATE,
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      contact_person: {
        type: Sequelize.STRING,
      },
      school_start_date: {
        type: Sequelize.DATE,
      },
      remark: {
        type: Sequelize.STRING,
      },
      result_url: {
        type: Sequelize.STRING,
      },
      form_url: {
        type: Sequelize.STRING,
      },
      form_two_url: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("announcements");
  },
};
