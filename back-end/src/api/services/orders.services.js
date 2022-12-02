const { Sale } = require('../../database/models');

const createOrder = async (sale) => {
  const { 
    userId, 
    sellerId,
    totalPrice, 
    deliveryAddress,
    deliveryNumber } = sale;
    
    const newSale = await Sale.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate: new Date(),
      status: 'Pendente',
    });

    return newSale.id;
};

const getAllOrders = async () => {
  const sales = await Sale.findAll();

  if (!sales) throw new Error('Sales not found');

  return sales;
};

const getOrdersById = async (id) => {
  const sale = await Sale.findByPk(id);

  if (!sale) throw new Error('Sale not found');

  return sale;
};

module.exports = { createOrder, getAllOrders, getOrdersById };