const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const createUserModel = require('../db/Model');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.env}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false
});

createUserModel(sequelize);
sequelize.sync({ force: false })

module.exports = sequelize;