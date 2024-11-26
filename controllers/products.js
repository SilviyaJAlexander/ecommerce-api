import Product from '../models/Product.js';

// Retrieve all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll(); // Fetches all products
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ success: false, message: 'Error fetching products' });
  }
};

// Retrieve a single product by ID
export const getProductById = async (req, res) => {
  const { id } = req.params; // Extract ID from URL parameters
  try {
    const product = await Product.findByPk(id); // Find product by primary key
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ success: false, message: 'Error fetching product' });
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  const { name, description, price, categoryId } = req.body; // Extract body fields
  if (!name || !description || !price || !categoryId) {
    return res.status(400).json({ success: false, message: 'All fields are required' }); // Validation
  }
  if (price <= 0) {
    return res.status(400).json({ success: false, message: 'Price must be greater than 0' }); // Price validation
  }
  try {
    const newProduct = await Product.create({ name, description, price, categoryId }); // Create product using Sequelize
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ success: false, message: 'Error creating product' });
  }
};

// Update an existing product
export const updateProduct = async (req, res) => {
  const { id } = req.params; // Extract ID from URL parameters
  const { name, description, price, categoryId } = req.body; // Extract body fields
  if (!name || !description || !price || !categoryId) {
    return res.status(400).json({ success: false, message: 'All fields are required' }); // Validation
  }
  if (price <= 0) {
    return res.status(400).json({ success: false, message: 'Price must be greater than 0' }); // Price validation
  }
  try {
    const product = await Product.findByPk(id); // Find product by primary key
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    await product.update({ name, description, price, categoryId }); // Update the product
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ success: false, message: 'Error updating product' });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  const { id } = req.params; // Extract ID from URL parameters
  try {
    const product = await Product.findByPk(id); // Find product by primary key
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    await product.destroy(); // Delete the product
    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, message: 'Error deleting product' });
  }
};
