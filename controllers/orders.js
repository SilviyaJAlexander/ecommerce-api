import Order from '../models/Order.js';

// Retrieve all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll(); // Fetch all orders
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ success: false, message: 'Error fetching orders' });
  }
};

// Retrieve a single order by ID
export const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByPk(id); // Find order by primary key
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }
    res.status(200).json({ success: true, data: order });
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ success: false, message: 'Error fetching order' });
  }
};

// Create a new order
export const createOrder = async (req, res) => {
  const { userId, products, total } = req.body;
  if (!userId || !products || !total || total <= 0) {
    return res.status(400).json({ success: false, message: 'All fields are required and total must be greater than 0' });
  }
  try {
    const newOrder = await Order.create({ userId, products, total }); // Create order
    res.status(201).json({ success: true, data: newOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ success: false, message: 'Error creating order' });
  }
};

// Update an existing order
export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { userId, products, total } = req.body;
  if (!userId || !products || !total || total <= 0) {
    return res.status(400).json({ success: false, message: 'All fields are required and total must be greater than 0' });
  }
  try {
    const order = await Order.findByPk(id); // Find order by primary key
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }
    await order.update({ userId, products, total }); // Update order
    res.status(200).json({ success: true, data: order });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ success: false, message: 'Error updating order' });
  }
};

// Delete an order
export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByPk(id); // Find order by primary key
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }
    await order.destroy(); // Delete order
    res.status(200).json({ success: true, message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ success: false, message: 'Error deleting order' });
  }
};
