// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('online_learning', 'learning_user', 'yourpassword', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
