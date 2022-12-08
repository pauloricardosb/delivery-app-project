'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      sale_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'sales',
        //   key: 'id'
        // },
        onDelete: 'CASCADE',
      },
      product_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        },
        onDelete: 'CASCADE',
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
};