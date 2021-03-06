const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Cliente = require('../model/Cliente')

const connection = new Sequelize(dbConfig);

Cliente.init(connection);

module.exports = connection;