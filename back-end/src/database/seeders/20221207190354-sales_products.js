'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'sales_products',
      [
        {
          sale_id: 1,
          product_id: 1,
          quantity: 1,
        },
        {
          sale_id: 1,
          product_id: 2,
          quantity: 2,
        },
      ],
      {},
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales_products', null, {});
  },
};