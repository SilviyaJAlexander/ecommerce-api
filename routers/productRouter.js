import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/products.js';
import { validate } from '../middleware/validate.js'; // Import the validation middleware
import { createProductSchema, updateProductSchema } from '../schemas/productSchemas.js'; // Import Joi schemas
const router = express.Router();

router.get('/', getProducts); // Retrieve all products
router.get('/:id', getProductById); //  Retrieve a single product by ID
router.post('/', validate(createProductSchema), createProduct); //  Create a new product
router.put('/:id', validate(updateProductSchema), updateProduct); //  Update a product
router.delete('/:id', deleteProduct); //  Delete a product

export default router;
