module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("candidates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      nisn: {
        type: Sequelize.STRING,
      },
      full_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nick_name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      dob: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      pob: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      birth_order: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      number_of_siblings: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      province_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      city_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      district_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      sub_district_id: {
        allowNull: true,
        type: Sequelize.BIGINT,
      },
      residence_addr: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      education_level: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      class: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      origin_pg: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      origin_kgarten: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      origin_elementary: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      origin_secondary: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      is_transfer: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
      },
      last_class: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      address_school: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      remark: {
        type: Sequelize.STRING,
      },
      form_path: {
        type: Sequelize.STRING,
      },
      status_class: {
        type: Sequelize.INTEGER,
      },
      is_graduated: {
        type: Sequelize.BOOLEAN,
      },
      approved: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("candidates");
  },
};
