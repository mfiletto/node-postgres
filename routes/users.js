const express = require('express');
const UsersService = require('../services/user.services');
const userSchema = require('../schema/user.schema');
const validatorHandler = require('../middlewares/validator.handler');

const router = express.Router();
const service = new UsersService();

/* list of users */
router.get('/', validatorHandler(userSchema.getUser), async (req, res) => {
  const users = await service.getUsers();
  res.json(users);
});

router.post('/', validatorHandler(userSchema.createUser, 'body'), async (req, res) => {
  try{
    const body = req.body;
    const newUser = await service.createUser(body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/:id', validatorHandler(userSchema.updateUser, 'body'), async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const user = await service.updateUser(id, changes);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.deleteUser(id);
  res.json(rta);
});

module.exports = router;