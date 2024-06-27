const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert("users", [
    //   {
    //     full_name: "John Doe",
    //     email: "user@example.com",
    //     status: 1,
    //     email_verified: 1,
    //     password: bcrypt.hashSync("123456", 8),
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //   },
    // ]);
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete("users", null, {});
  },
};
