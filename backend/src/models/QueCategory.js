const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QueCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      QueCategory.hasMany(models.quedescription, {
        foreignKey: "que_category_id",
      });
    }
  }
  QueCategory.init(
    {
      code: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "que_category",
      modelName: "quecategory",
      underscored: true,
    }
  );
  return QueCategory;
};
