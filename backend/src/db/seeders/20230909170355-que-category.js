"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("que_category", [
      {
        code: "100",
        category: "Riwayat Kesehatan",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        code: "101",
        category: "Keadaan Indera",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        code: "102",
        category: "Hubungan Keluarga",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        code: "103",
        category: "Tentang Sade",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        code: "104",
        category: "Rencana Keterlibatan",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("que_category", null, {});
  },
};
