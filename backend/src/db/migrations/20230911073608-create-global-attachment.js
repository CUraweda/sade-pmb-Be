"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("global_attachment", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      candidate_id: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "candidates",
          key: "id",
        },
      },
      attachment_type: {
        type: Sequelize.STRING,
      },
      mime_type: {
        type: Sequelize.STRING,
      },
      path: {
        type: Sequelize.STRING,
      },
      filename: {
        type: Sequelize.STRING,
      },
      original_filename: {
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
    await queryInterface.dropTable("global_attachment");
  },
};
