const { Client } = require('pg');

async function getConnection() {
const client = new Client({
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'postgres',
  database: 'course_postgres'
});
// this returns a promise
await client.connect();
return client;
}

module.exports = getConnection;