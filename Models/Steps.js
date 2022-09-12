const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");
class Steps extends Model {}

Steps.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titleId: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    instruction:{
        type: DataTypes.STRING
    },
    stepNumber:{
      type:DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "steps",
  }
);

module.exports = Steps;
