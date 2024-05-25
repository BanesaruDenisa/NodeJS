const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Product extends Model {
  static associate(models) {
    Product.belongsTo(models.Furnizor, { foreignKey: 'furnizorId' });
    Product.hasMany(models.Review, { foreignKey: 'productId' });
  }
}

Product.init({
  name: DataTypes.STRING,
  brand: DataTypes.STRING,
  description: DataTypes.TEXT,
  furnizorId: DataTypes.INTEGER,
}, {
  sequelize,
  modelName: 'Product',
});

module.exports = Product;
