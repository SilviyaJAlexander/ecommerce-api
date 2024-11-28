import express from 'express';
import { getOrders, getOrderById, createOrder, updateOrder, deleteOrder } from '../controllers/orders.js';
import { validate } from '../middleware/validate.js'; // Import the validation middleware
import { createOrderSchema, updateOrderSchema } from '../schemas/orderSchemas.js'; // Import Joi schemas
const router = express.Router();

router.get('/', getOrders); //  Retrieve all orders
router.get('/:id', getOrderById); //  Retrieve a single order by ID
router.post('/', validate(createOrderSchema), createOrder);// Create a new order
router.put('/:id', validate(updateOrderSchema), updateOrder);//Update an order
router.delete('/:id', deleteOrder); // Delete an order

export default router;
