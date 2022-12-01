const { getOrderById } = require('../services/sales.service');

const getOrderByIdController = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  try {
    const order = await getOrderById(id);
    res.status(201);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = { getOrderByIdController }