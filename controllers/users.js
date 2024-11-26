import User from '../models/User.js';

// Retrieve all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll(); // Sequelize fetches all users
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ success: false, message: 'Error fetching users' });
  }
};

// Retrieve a single user by ID
export const getUserById = async (req, res) => {
  const { id } = req.params; // Extract ID from URL parameters
  try {
    const user = await User.findByPk(id); // Find user by primary key
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ success: false, message: 'Error fetching user' });
  }
};

// Create a new user
export const createUser = async (req, res) => {
  const { name, email, password } = req.body; // Extract body fields
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required' }); // Validation
  }
  try {
    const newUser = await User.create({ name, email, password }); // Create user using Sequelize
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, message: 'Error creating user' });
  }
};

// Update an existing user
export const updateUser = async (req, res) => {
  const { id } = req.params; // Extract ID from URL parameters
  const { name, email, password } = req.body; // Extract body fields
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required' }); // Validation
  }
  try {
    const user = await User.findByPk(id); // Find user by primary key
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    await user.update({ name, email, password }); // Update the user
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ success: false, message: 'Error updating user' });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  const { id } = req.params; // Extract ID from URL parameters
  try {
    const user = await User.findByPk(id); // Find user by primary key
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    await user.destroy(); // Delete the user
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ success: false, message: 'Error deleting user' });
  }
};
