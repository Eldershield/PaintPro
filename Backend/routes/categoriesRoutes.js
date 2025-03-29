import express from 'express';
import { saveCategories, getCategories } from '../controllers/categoryController.js';

const router = express.Router();

router.post('/', saveCategories); // Save categories to the database
router.get('/', getCategories); // Fetch categories from the database

export default router;