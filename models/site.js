const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Site = sequelize.define('site', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  site_name: Sequelize.STRING,
  site_active: Sequelize.BOOLEAN
});

module.exports = Site;