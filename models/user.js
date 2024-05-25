// const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcryptjs');
// const sequelize = require('../config/database');

// class User extends Model {
//   static associate(models) {
//     User.hasMany(models.Product, { foreignKey: 'userId' });
//   }

//   // Adaugă o metodă pentru a compara parola
//   validPassword(password) {
//     return bcrypt.compareSync(password, this.password);
//   }
// }

// User.init({
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     set(value) {
//       const hashedPassword = bcrypt.hashSync(value, 10);
//       this.setDataValue('password', hashedPassword);
//     }
//   },
// }, {
//   sequelize,
//   modelName: 'User',
//   hooks: {
//     beforeCreate: async (user) => {
//       user.password = await bcrypt.hash(user.password, 10);
//     },
//     beforeUpdate: async (user) => {
//       if (user.changed('password')) {
//         user.password = await bcrypt.hash(user.password, 10);
//       }
//     }
//   }
// });

// module.exports = User;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;
