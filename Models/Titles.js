const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
class Titles extends Model {}

Titles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "titles",
  }
);

module.exports = Titles;
