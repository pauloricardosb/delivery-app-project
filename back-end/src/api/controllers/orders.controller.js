const { createOrder, getAllOrders } = require('../services/orders.services');

const create = async (req, res) => {
  try {
    const sale = await createOrder(req.body);
    return res.status(201).json({ id: sale });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getAll = async (_req, res) => {
  try {
    const orders = await getAllOrders();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { create, getAll };
