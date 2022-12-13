const { Sale, User } = require('../../database/models');

// Helper functions

const findUserId = async (userName) => {
  const user = await User.findOne({ where: { name: userName } });

  if (!user) throw new Error('User not found');

  return user.id;
};

const getOrdersBySellerName = async (sellerName) => {
  const sellerId = await findUserId(sellerName);
  const orders = await Sale.findAll({ where: { sellerId } });

  const sellerOrderResult = orders.map(({ id, saleDate, totalPrice, status }) => ({
    id,
    saleDate: saleDate.toLocaleDateString('pt-BR'),
    status,
    totalPrice,
  }));

  if (sellerOrderResult.length === 0) throw new Error('Orders not found');

  return sellerOrderResult;
};

module.exports = {
  getOrdersBySellerName,
};
