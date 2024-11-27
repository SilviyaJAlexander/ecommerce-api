import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

// Retrieve all users
router.get('/', getUsers); 

// Retrieve a specific user by ID
router.get('/:id', getUserById); 

// Create a new user
router.post('/', createUser); 

// Update an existing user
router.put('/:id', updateUser); 

// Delete a user
router.delete('/:id', deleteUser); 

export default router;
