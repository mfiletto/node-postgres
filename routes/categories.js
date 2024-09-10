const express = require('express');
const categoryRouter = express.Router();

categoryRouter.get('/', (req, res) => {
  res.json({
    name: `Category `,
    price: 100,
    description: `This is a category`,
    id: 1
  });
});

categoryRouter.get('/:categoryId/products/:productId', (req, res) => {
  const {categoryId, productId} = req.params;
  res.json({
    name: `Product ${productId}`,
    price: 100,
    description: `This is a product ${productId} from category ${categoryId}`,
    id: productId
  });
});

module.exports = categoryRouter;