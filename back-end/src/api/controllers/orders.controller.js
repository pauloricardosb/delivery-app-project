const { createOrder, getOrdersById } = require('../services/orders.services');

const create = async (req, res) => {
  try {
    const sale = await createOrder(req.body);
    return res.status(201).json({ id: sale });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getByUserId = async (req, res) => {
  try {
    const order = await getOrdersById(req.params.id, req.user.id);
    return res.status(200).json(order);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { create, getByUserId };
