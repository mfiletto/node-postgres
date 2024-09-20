const express = require('express');
const { faker } = require('@faker-js/faker');
const routerApi = require('./routes');

const app = express();
const port = 3005;

// this middleware is used to parse the incoming requests with JSON payloads
app.use(express.json());

app.get('/', (req, res) => {
  const products = [];
  for (let i = 0; i < 10; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      id: i
    });
  }
  res.json({products});
});

routerApi(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});