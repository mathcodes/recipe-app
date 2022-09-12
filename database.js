const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("recipes", "user", "password", {
  dialect: "sqlite",
  host: "./recipes.sqlite",
});

module.exports = sequelize;