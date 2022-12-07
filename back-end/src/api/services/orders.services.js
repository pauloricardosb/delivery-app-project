const { Sale, Product, SaleProduct, User } = require('../../database/models');

const findUserId = async (userName) => {
  const user = await User.findOne({ where: { name: userName } });

  if (!user) throw new Error('User not found');

  return user.id;
};

const salesProductsNN = async (saleId, productId, quantity) => {
  await SaleProduct.create({
    saleId,
    productId,
    quantity,
  });
};

const createOrder = async (sale) => {
const { userName, sellerId, deliveryAddress, deliveryNumber, productId, quantity } = sale;

  const productPrice = await Product.findByPk(productId);
  const { price } = productPrice.dataValues;

  const newSale = await Sale.create({
    userId: await findUserId(userName),
    sellerId,
    totalPrice: price * quantity,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date(),
    status: 'Pendente',
  });
  
  await salesProductsNN(newSale.id, productId, quantity);
  return newSale.id;
};

const getOrdersByUserId = async (userId) => {
  const orders = await Sale.findAll({ where: { userId } });

  const orderResult = orders.map(({ id, saleDate, totalPrice, status }) => ({
    id,
    saleDate: saleDate.toLocaleDateString('pt-BR'),
    status,
    totalPrice,
  }));

  if (orderResult.length === 0) throw new Error('Orders not found');

  return orderResult;
};

const getOrdersByOrdersId = async (orderId) => {
  const order = await Sale.findByPk(orderId);
  const sellerName = await User.findByPk(order.sellerId);

  const orderResult = {
    id: order.id,
    sellerName: sellerName.name,
    saleDate: order.saleDate.toLocaleDateString('pt-BR'),
    status: order.status,
    totalPrice: order.totalPrice,
  };

  if (!order) throw new Error('Order not found');

  return orderResult;
};

module.exports = { createOrder, getOrdersByUserId, getOrdersByOrdersId };
