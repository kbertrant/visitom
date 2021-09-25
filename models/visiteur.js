const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Visiteur = sequelize.define('visiteur', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  visit_doc_id: Sequelize.STRING,
  doc_id_expiration: Sequelize.DATE,
  visit_fname: Sequelize.STRING,
  visit_lname: Sequelize.STRING,
  visit_id: Sequelize.INTEGER
});

module.exports = Visiteur;