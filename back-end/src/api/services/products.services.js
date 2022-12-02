const { Product } = require('../../database/models');

const getAll = async () => {
  const products = await Product.findAll();

  if (!products) throw new Error('Products not found');
  
  return products;
};

const getById = async (id) => {
  const product = await Product.findByPk(id);

  if (!product) throw new Error('Product not found');

  return product;
};

module.exports = { getAll, getById };