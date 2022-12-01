const { SaleProduct } = require('../../database/models');

const getOrderById = async (saleId) => {
  const order = await SaleProduct.findOne({ where: { saleId } });
  return { id: saleId };
}

module.exports = { getOrderById }