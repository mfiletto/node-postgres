const Joi = require('joi');

const id = Joi.string().uuid();
const username = Joi.string().min(3).max(30);
const email = Joi.string().email();
const password = Joi.string().min(6);
const role = Joi.string().valid('admin', 'user');

const createUser = Joi.object({
  username: username.required(),
  email: email.required(),
  password: password.required(),
  role: role.required(),
});

const updateUser = Joi.object({
  username: username,
  password: password,
  role: role,
});

const getUser = Joi.object({
  id: id.required(),
});


module.exports = { createUser, updateUser, getUser };