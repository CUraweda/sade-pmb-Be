module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("parents", {
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
      parent_type: {
        type: Sequelize.STRING,
      },
      nik: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      pob: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.DATE,
      },
      citizen: {
        type: Sequelize.STRING,
      },
      religion: {
        type: Sequelize.STRING,
      },
      marriage_to: {
        type: Sequelize.INTEGER,
      },
      in_age: {
        type: Sequelize.INTEGER,
      },
      relationship_to_candidate: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      com_priority: {
        type: Sequelize.STRING,
      },
      last_education: {
        type: Sequelize.STRING,
      },
      major: {
        type: Sequelize.STRING,
      },
      occupation: {
        type: Sequelize.STRING,
      },
      salary: {
        type: Sequelize.STRING,
      },
      field_of_work: {
        type: Sequelize.STRING,
      },
      field_of_work_others: {
        type: Sequelize.STRING,
      },
      position: {
        type: Sequelize.STRING,
      },
      position_others: {
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
    await queryInterface.dropTable("parents");
  },
};
