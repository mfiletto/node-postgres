const express = require('express');
const ProductsService = require('../services/product.services');

/* Principios SOLID */
/* S – Single Responsibility Principle (SRP) */
/* Creamos Rutas, que luego usamos por medio de middlewares */
/* Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor. */
const router = express.Router();
const service = new ProductsService();

/* list of products */
router.get('/', async (req, res) => {
  const products = await service.getProducts();
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const product = await service.getProduct(id);
  res.json(product);
});

router.post('/', async (req, res) => {
  const product = req.body;
  const newProduct = await service.addProduct(product);
  res.json(newProduct);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const updatedProduct = await service.updateProduct(id, changes);
    res.json(updatedProduct);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

module.exports = router;