const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
class Ingredients extends Model {}

Ingredients.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    stepId:{
      type: DataTypes.INTEGER
    },
    titleId: {
      type: DataTypes.INTEGER,
    },
    ingredient: {
      type: DataTypes.STRING,
    },
    appliesToStep:{
      type: DataTypes.INTEGER,    
    }
  },
  {
    sequelize,
    modelName: "ingredients",
  }
);

module.exports = Ingredients;