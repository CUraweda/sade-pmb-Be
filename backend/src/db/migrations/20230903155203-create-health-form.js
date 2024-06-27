module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("health_form", {
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
      weight: {
        type: Sequelize.INTEGER,
      },
      height: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
      },
      parent_name: {
        type: Sequelize.STRING,
      },
      handphone: {
        type: Sequelize.STRING,
      },
      blood_type: {
        type: Sequelize.STRING,
      },
      health_insurance_no: {
        type: Sequelize.STRING,
      },
      emergency_contact_one: {
        type: Sequelize.STRING,
      },
      emergency_contact_two: {
        type: Sequelize.STRING,
      },
      phone_one: {
        type: Sequelize.STRING,
      },
      phone_two: {
        type: Sequelize.STRING,
      },
      hospital_one: {
        type: Sequelize.STRING,
      },
      hospital_two: {
        type: Sequelize.STRING,
      },
      doctor_one: {
        type: Sequelize.STRING,
      },
      doctor_two: {
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
    await queryInterface.dropTable("health_form");
  },
};
