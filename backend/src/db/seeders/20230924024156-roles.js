"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("roles", [
      {
        code: "ADM",
        name: "Administrator",
      },
      {
        code: "OPR",
        name: "Operator",
      },
      {
        code: "FIN",
        name: "Finance",
      },
      {
        code: "USR",
        name: "User",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("roles", null, {});
  },
};
