'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    // await queryInterface.bulkInsert('sales', [{
    //   user_id: 3,
    //   seller_id: 2,
    //   total_price: 7.50,
    //   delivery_address: 'Rua das Flores',
    //   delivery_number: '1145-6638',
    //   sale_date: '22/12/02',
    //   status: 'Pendente'
    //  }], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};