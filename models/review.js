// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// class Review extends Model {
//   static associate(models) {
//     Review.belongsTo(models.Product, { foreignKey: 'productId' });
//   }
// }

// Review.init({
//   content: DataTypes.TEXT,
//   rating: DataTypes.INTEGER,
//   productId: DataTypes.INTEGER,
// }, {
//   sequelize,
//   modelName: 'Review',
// });

// module.exports = Review;


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Review extends Model {
  static associate(models) {
    Review.belongsTo(models.Product, { foreignKey: 'productId' });
    Review.belongsTo(models.User, { foreignKey: 'userId' });
  }
}

Review.init({
  content: DataTypes.TEXT,
  rating: DataTypes.INTEGER,
  productId: DataTypes.INTEGER,
  userId: DataTypes.INTEGER,
}, {
  sequelize,
  modelName: 'Review',
});

module.exports = Review;
