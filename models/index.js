import sequelize from '../db/index.js'; // Import the Sequelize instance
import User from './User.js'; // Import all models
import Category from './Category.js';
import Product from './Product.js';
import Order from './Order.js';

// Register models with Sequelize
const models = {
  User,
  Category,
  Product,
  Order,
};

// Handle associations (if any)
Object.values(models).forEach((model) => {
    if (model.associate) {
      model.associate(models);
    }
  });

export { sequelize }; // Export Sequelize instance
export default models; // Export all models as a single object