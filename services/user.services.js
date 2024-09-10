const pool = require('../libs/postgres_pool');
const { models } = require('../libs/sequelize');

class UsersService {
  constructor() {
  }

  async getUsers() {
    const rta = await models.User.findAll();
    return rta;
  }

  async createUser(data) {
    const rta = await models.User.create(data);
    return rta;
  }

  async updateUser(id, changes) {
    const rta = await models.User.update(changes, {
      where: { id }
    });
    return rta;
  }

  async deleteUser(id) {
    const rta = await models.User.destroy({
      where: { id }
    });
    return rta;
  }
}

module.exports = UsersService;