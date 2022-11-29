'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [{
      user_id: 1,
      seller_id: 2,
      total_price: 27.00,
      delivery_address: 'Rua Lugar Nenhum',
      delivery_number: 3,
      sale_date: Sequelize.literal('CURRENT_TIMESTAMP'),
      status: 'pendente',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
