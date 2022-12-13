const { Sale, Product, SaleProduct, User } = require('../../database/models');

// Helper functions

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

const productArray = async (orderId) => { 
  const products = await SaleProduct.findAll({ where: { saleId: orderId } });

  const array = products.map(async ({ productId, quantity }) => {
    const { name, price } = await Product.findByPk(productId);
    return { productId, name, quantity, price };
  });
  return Promise.all(array);
};

// Services

const createOrder = async (sale) => {
  const { userName, sellerId, deliveryAddress, deliveryNumber, totalPrice, products } = sale;

  const newSale = await Sale.create({
    userId: await findUserId(userName),
    sellerId,
    totalPrice: +totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date(),
    status: 'Pendente',
  });

  products.forEach(async (product) => {
    await salesProductsNN(newSale.id, product.id, product.quantity);
  });

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

const updateOrderStatus = async (orderId, status) => {
  try {
    const order = await Sale.findByPk(orderId);
    if (!order) throw new Error('Order not found');

    await Sale.update({ status }, { where: { id: orderId } });

    return { id: orderId, status };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { 
  createOrder, 
  getOrdersByUserName,
  getOrdersByOrdersId,
  updateOrderStatus,
};
