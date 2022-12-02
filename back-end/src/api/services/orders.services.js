const { Sale } = require('../../database/models');

const createOrder = async (sale) => {
  const { 
    userId, 
    sellerId,
    totalPrice, 
    deliveryAddress,
    deliveryNumber } = sale;
    
    const newSale = await Sale.create({
      SaleId: userId,
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleDate: new Date(),
      status: 'Pendente',
    });

    const { id } = newSale;
    return id;
};

const getAllOrders = async () => {
  const sales = await Sale.findAll();

  if (!sales) throw new Error('No sales found');

  return sales;
};

module.exports = { createOrder, getAllOrders };