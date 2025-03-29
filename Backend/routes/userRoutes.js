import express from 'express';
import { getUserProfile } from '../controllers/UserController.js';
import protect from '../middleware/authMiddleware.js'; // Middleware to verify token

const router = express.Router();

router.get('/profile', protect, getUserProfile);

export default router;