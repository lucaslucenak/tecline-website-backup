const Sequelize = require('sequelize');
const connection = new Sequelize('db_teclinewebsite', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;