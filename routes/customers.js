const express = require('express');
const CustomersService = require('../services/customer.services');
const customerSchema = require('../schema/customer.schema');
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router();
const service = new CustomersService();

/* list of customers */
router.get('/', validatorHandler(customerSchema.getCustomer), async (req, res) => {
  const customers = await service.getCustomers();
  res.json(customers);
});

router.post('/', validatorHandler(customerSchema.createCustomer, 'body'), async (req, res, next) => {
  try{
    const body = req.body;
    const newCustomer = await service.createCustomer(body);
    res.status(201).json(newCustomer);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', validatorHandler(customerSchema.updateCustomer, 'body'), async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const customer = await service.updateCustomer(id, changes);
    res.json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.deleteCustomer(id);
  res.json(rta);
});

module.exports = router;