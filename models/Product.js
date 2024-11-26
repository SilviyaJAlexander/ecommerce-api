import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';
import Category from './Category.js'; // Import the Category model for association

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category, // References the Category model
      key: 'id',
    },
  },
});

// Establish a relationship
Product.belongsTo(Category, { foreignKey: 'categoryId' });

export default Product;