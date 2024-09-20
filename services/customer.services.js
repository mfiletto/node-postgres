const { models } = require('../libs/sequelize');

class CustomersService {
  constructor() {
  }

  async getCustomers() {
    const rta = await models.Customer.findAll();
    return rta;
  }

  async createCustomer(data) {
    const rta = await models.Customer.create(data);
    return rta;
  }

  async updateCustomer(id, changes) {
    const rta = await models.Customer.update(changes, {
      where: { id }
    });
    return rta;
  }

  async deleteCustomer(id) {
    const rta = await models.Customer.destroy({
      where: { id }
    });
    return rta;
  }
}

module.exports = CustomersService;