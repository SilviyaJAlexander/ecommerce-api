import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';
import User from './User.js'; // Import the User model for association

const Order = sequelize.define('Order', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User, // References the User model
      key: 'id',
    },
  },
  products: {
    type: DataTypes.JSON, // Stores an array of product objects with productId and quantity
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Establish a relationship
Order.belongsTo(User, { foreignKey: 'userId' });

export default Order;