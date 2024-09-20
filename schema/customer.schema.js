const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const last_name = Joi.string().min(3).max(30);
const email = Joi.string().email();
const userId = Joi.number().integer();

const createCustomer = Joi.object({
  name: name.required(),
  last_name: last_name.required(),
  email: email.required(),
  userId: userId.required(),
});

const updateCustomer = Joi.object({
  name,
  last_name,
  email,
  userId,
});

const getCustomer = Joi.object({
  id: id.required(),
});


module.exports = { createCustomer, updateCustomer, getCustomer };