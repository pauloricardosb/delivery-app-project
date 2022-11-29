'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [{
      name: 'Becks 330ml',
      price: 4.49,
      url_image: '',
    }, {
      name: 'Heineken 600ml',
      price: 7.50,
      url_image: '',
    }, {
      name: 'Brahma Duplo Malte 350ml',
      price: 2.79,
      url_image: '',
    }, {
      name: 'Whisky Ballantines 1L',
      price: 14.98,
      url_image: 'https://m.media-amazon.com/images/I/513ulVnETiL.__AC_SX342_SY445_QL70_ML2_.jpg',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
