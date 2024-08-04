import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/userController.js';

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to log in a user
router.post('/login', loginUser);

// Route to get user profile (protected route)
router.get('/profile', getUserProfile);

export default router;
