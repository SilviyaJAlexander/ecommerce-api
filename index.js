import express from 'express';
import 'dotenv/config'; // Load environment variables from .env
import { sequelize } from './models/index.js'; // Establish database connection and sync tables

// Initialize the Express app
const app = express();

// Set the port 
const port = 3000;


// Middleware to parse JSON bodies
app.use(express.json());

// Example route (you'll replace this with your actual routes)
app.get('/', (req, res) => {
  res.send('Welcome to the eCommerce API!');
});

// Sync all models
(async () => {
    try {
      await sequelize.sync({ alter: true }); // Sync models without dropping tables
      console.log('Tables created successfully.');
    } catch (error) {
      console.error('Error syncing tables:', error.message);
    }
  })();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
