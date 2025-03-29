import Category from '../models/categories.js';

export const saveCategories = async (req, res) => {
  try {
    const categories = req.body; // Expecting categories array from the frontend
    await Category.insertMany(categories);
    res.status(201).json({ message: 'Categories saved successfully!' });
  } catch (error) {
    console.error('Error saving categories:', error);
    res.status(500).json({ message: 'Failed to save categories', error: error.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Failed to fetch categories', error: error.message });
  }
};