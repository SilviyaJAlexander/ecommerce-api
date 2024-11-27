import express from 'express';
import 'dotenv/config'; // Load environment variables from .env
import { sequelize } from './models/index.js'; // Establish database connection and sync tables
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
import categoryRouter from './routers/categoryRouter.js';

// Initialize the Express app
const app = express();

// Set the port 
const port = 3000;


// Middleware to parse JSON bodies
app.use(express.json());

// Mount routers
app.use('/users', userRouter); // Routes for users
app.use('/products', productRouter); // Routes for products
app.use('/orders', orderRouter); // Routes for orders
app.use('/categories', categoryRouter); // Routes for categories


// Root route
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
