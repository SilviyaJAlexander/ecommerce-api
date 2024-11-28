import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/users.js';
import { validate } from '../middleware/validate.js'; // Import the validation middleware
import { createUserSchema, updateUserSchema } from '../schemas/userSchemas.js'; // Import Joi schemas

const router = express.Router();

// Retrieve all users
router.get('/', getUsers); 

// Retrieve a specific user by ID
router.get('/:id', getUserById); 

// Create a new user
router.post('/', validate(createUserSchema), createUser); 

// Update an existing user
router.put('/:id', validate(updateUserSchema), updateUser);

// Delete a user
router.delete('/:id', deleteUser); 

export default router;
