import express from 'express';
import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from '../controllers/categories.js';
import { validate } from '../middleware/validate.js'; // Import the validation middleware
import { createCategorySchema, updateCategorySchema } from '../schemas/categorySchemas.js'; // Import Joi schemas
const router = express.Router();

router.get('/', getCategories); //  Retrieve all categories
router.get('/:id', getCategoryById); // Retrieve a single category by ID
router.post('/', validate(createCategorySchema), createCategory); // Create a new category
router.put('/:id', validate(updateCategorySchema), updateCategory);//  Update a category
router.delete('/:id', deleteCategory); //  Delete a category

export default router;
