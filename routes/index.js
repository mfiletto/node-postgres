const express = require('express');
const productsRouter = require('./products');
const categoriesRouter = require('./categories');
const usersRouter = require('./users');
const customersRouter = require('./customers');

function routerApi(app) {

  const router = express.Router();
  app.use('/api/v1', router);
  
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
}

module.exports = routerApi;