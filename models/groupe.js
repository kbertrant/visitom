const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Groupe = sequelize.define('groupe', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  group_name: Sequelize.STRING,
  group_active: Sequelize.BOOLEAN
});

module.exports = Groupe;