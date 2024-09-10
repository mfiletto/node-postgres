const { Pool } = require('pg');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.env}:${config.dbPort}/${config.dbName}`;
console.log('URI:', URI);

const pool = new Pool({
  connectionString: URI,
});

module.exports = pool;