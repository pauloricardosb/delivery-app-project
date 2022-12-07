'use strict';

module.exports = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define('SaleProduct', {
        saleId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
    }, {
        tableName: 'sales_products',
        timestamps: false,
        underscored: true,
    });

    SaleProduct.associate = (models) => {
        models.Sale.belongsToMany(models.Product, {
        as: 'products',
        through: SaleProduct,
        foreignKey: 'saleId',
        otherKey: 'productId'
        });

    SaleProduct.associate = (models) => {
        SaleProduct.belongsTo(models.Sale, {
            foreignKey: 'sale_id', as: 'sale'
        });
        
    SaleProduct.belongsTo(models.Product, {
        foreignKey: 'product_id', as: 'product'
    });
    };
}
    return SaleProduct;
  }