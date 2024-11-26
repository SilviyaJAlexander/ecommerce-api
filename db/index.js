import { Sequelize } from 'sequelize';
import 'dotenv/config'; // Load environment variables

// Initialize Sequelize
const sequelize = new Sequelize(process.env.PG_URI, {
  dialect: 'postgres',
  logging: false, // Suppress query logging
});

export default sequelize; // Export the Sequelize instance
