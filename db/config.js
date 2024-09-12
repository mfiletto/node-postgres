const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.env}:${config.dbPort}/${config.dbName}`;

module.exports = {
  localhost: {
    url: URI,
    dialect: 'postgres',
  },
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  }
}