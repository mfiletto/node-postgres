const express = require('express');
const UsersService = require('../services/user.services');

const router = express.Router();
const service = new UsersService();

/* list of users */
router.get('/', async (req, res) => {
  const users = await service.getUsers();
  res.json(users);
});

module.exports = router;