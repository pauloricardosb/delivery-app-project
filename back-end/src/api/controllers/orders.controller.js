const { 
  createOrder,
  getOrdersByUserName, 
  getOrdersByOrdersId,
  updateOrderStatus,
} = require('../services/orders.services');
const { getOrdersBySellerName } = require('../services/seller.services');

const create = async (req, res) => {
  try {
    const sale = await createOrder(req.body);
    return res.status(201).json({ id: sale });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getByUserName = async (req, res) => {
  try {
    const order = await getOrdersByUserName(req.params.name);
    return res.status(200).json(order);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getBySellerName = async (req, res) => {
  try {
    const order = await getOrdersBySellerName(req.params.name);
    return res.status(200).json(order);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getByOrderId = async (req, res) => {
  try {
    const order = await getOrdersByOrdersId(req.params.id);
    return res.status(200).json(order);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const order = await updateOrderStatus(req.params.id, req.body.status);
    return res.status(200).json(order);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { create, getByUserName, getByOrderId, updateStatus, getBySellerName };
