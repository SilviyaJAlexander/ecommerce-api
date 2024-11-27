import express from 'express';
import { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from '../controllers/categories.js';

const router = express.Router();

router.get('/', getCategories); //  Retrieve all categories
router.get('/:id', getCategoryById); // Retrieve a single category by ID
router.post('/', createCategory); // Create a new category
router.put('/:id', updateCategory); //  Update a category
router.delete('/:id', deleteCategory); //  Delete a category

export default router;
