const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Furnizor extends Model {
  static associate(models) {
    Furnizor.hasMany(models.Product, { foreignKey: 'furnizorId' });
  }
}

Furnizor.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cui: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Furnizor',
});

module.exports = Furnizor;
