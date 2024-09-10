const pool = require('../libs/postgres_pool');
const { models } = require('../libs/sequelize');

class UsersService {
  constructor() {
    this.users = [];
    this.pool = pool;
    this.pool.on('error', (err, client) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    });
  }

  async getUsers() {
    const rta = await models.User.findAll();
    return rta;
  }
}

module.exports = UsersService;