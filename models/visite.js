const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Visite = sequelize.define('visite', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  visite_type: Sequelize.STRING,
  visite_company: Sequelize.STRING,
  arrival_time: Sequelize.DATE,
  depqrt_time: Sequelize.DATE,
  visite_status: Sequelize.STRING,
  visite_comment: Sequelize.STRING
});

module.exports = Visite;