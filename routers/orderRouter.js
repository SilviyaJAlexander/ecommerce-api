import express from 'express';
import { getOrders, getOrderById, createOrder, updateOrder, deleteOrder } from '../controllers/orders.js';

const router = express.Router();

router.get('/', getOrders); //  Retrieve all orders
router.get('/:id', getOrderById); //  Retrieve a single order by ID
router.post('/', createOrder); // Create a new order
router.put('/:id', updateOrder); //Update an order
router.delete('/:id', deleteOrder); // Delete an order

export default router;
