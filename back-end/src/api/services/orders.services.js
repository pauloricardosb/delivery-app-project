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

  const { price } = await Product.findByPk(productId);

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

const getOrdersByUserName = async (userName) => {
  const userId = await findUserId(userName);
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

const productArray = async (orderId) => { 
  const products = await SaleProduct.findAll({ where: { saleId: orderId } });

  const array = products.map(async ({ productId, quantity }) => {
    const { name, price } = await Product.findByPk(productId);
    return { productId, name, quantity, price };
  });
  return Promise.all(array);
};

const getOrdersByOrdersId = async (orderId) => {
  const order = await Sale.findByPk(orderId);
  const sellerName = await User.findByPk(order.sellerId);

  const products = await productArray(orderId);

  const orderResult = {
    id: order.id,
    sellerName: sellerName.name,
    saleDate: order.saleDate.toLocaleDateString('pt-BR'),
    status: order.status,
    totalPrice: order.totalPrice,
    products,
  };

  if (!order) throw new Error('Order not found');

  return orderResult;
};

module.exports = { createOrder, getOrdersByUserName, getOrdersByOrdersId };