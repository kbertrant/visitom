const Sequelize = require('sequelize');

const sequelize = new Sequelize('visitom', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;