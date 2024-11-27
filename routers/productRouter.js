import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts); // Retrieve all products
router.get('/:id', getProductById); //  Retrieve a single product by ID
router.post('/', createProduct); //  Create a new product
router.put('/:id', updateProduct); //  Update a product
router.delete('/:id', deleteProduct); //  Delete a product

export default router;
