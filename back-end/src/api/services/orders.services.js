const { Sale, Product, SaleProduct } = require('../../database/models');

const salesProductsNN = async (saleId, productId, quantity) => {
  await SaleProduct.create({
    saleId,
    productId,
    quantity,
  });
};

const createOrder = async (sale) => {
const { userId, sellerId, deliveryAddress, deliveryNumber, productId, quantity } = sale;

  const productPrice = await Product.findByPk(productId);
  const { price } = productPrice.dataValues;

  const newSale = await Sale.create({
    userId,
    sellerId,
    productId,
    quantity,
    totalPrice: price * quantity,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date(),
    status: 'Pendente',
  });
  
  await salesProductsNN(newSale.id, productId, quantity);
  return newSale.id;
};

const getOrdersById = async (userId) => {
  const orders = await Sale.findAll({
    where: { userId },
    include: [
      {
        model: Product,
        as: 'products',
      },
    ],
  });

  const orderResult = orders.map(({ id, saleDate, totalPrice, status }) => ({
    id,
    saleDate: saleDate.toLocaleDateString('pt-BR'),
    totalPrice,
    status,
  }));

  if (orderResult.length === 0) throw new Error('Orders not found');

  return orderResult;
};

module.exports = { createOrder, getOrdersById };
