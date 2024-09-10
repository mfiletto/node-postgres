require('dotenv').config(); // Load .env file

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3005,
  dbPort: process.env.DATABASE_PORT || 5432,
  dbUser: process.env.DATABASE_USER,
  dbPassword: process.env.DATABASE_PASSWORD,
  dbName: process.env.DATABASE_NAME,
}

module.exports = {config};