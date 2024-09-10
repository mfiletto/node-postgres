const getConnection = require('../libs/postgres');
const pool = require('../libs/postgres_pool');
const sequelize = require('../libs/sequelize');

class ProductsService {
  constructor() {
    this.products = [];
    this.pool = pool;
    this.pool.on('error', (err, client) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    });
  }

  async getProducts() {
    const query = 'SELECT * FROM products';
    /* using pool */
    /* const response = await this.pool.query(query); */
    /* using sequelize */
    const [data, metadata] = await sequelize.query(query);
    return {data, metadata};
  }

  async getProduct(id) {
    const query = 'SELECT * FROM products WHERE product_id = $1';
    const response = await this.pool.query(query, [id]);
    return response.rows;
  }

  async addProduct(product) {
    const client = await getConnection();
    const response = await client.query('INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *', [product.name, product.description, product.price]);
    return response.rows[0];
  }

  async updateProduct(id, changes) {
    const index = this.products.findIndex(product => product.id === id);
    this.products[index] = {
      ...this.products[index],
      ...changes
    };
    return this.products[index];
  }

  async deleteProduct(id) {
    const index = this.products.findIndex(product => product.id === id);
    this.products.splice(index, 1);
    return this.products;
  }
}

module.exports = ProductsService;