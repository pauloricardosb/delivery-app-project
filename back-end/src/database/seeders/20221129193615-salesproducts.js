module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('salesProducts', [{
      sale_id: 1,
      product_id: 2,
      quantity: 2,
    }, {
      sale_id: 1,
      product_id: 4,
      quantity: 1,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('salesProducts', null, {});
  }
};
