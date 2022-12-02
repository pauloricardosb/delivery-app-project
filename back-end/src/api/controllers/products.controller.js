const { getAll, getById } = require('../services/products.services');

const getProducts = async (_req, res) => {
  try {
    const products = await getAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getProductsById = async (req, res) => {
  try {
    const product = await getById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getProducts, getProductsById };