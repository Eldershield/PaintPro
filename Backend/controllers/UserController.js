import User from '../models/User.js';

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you're using a token to identify the user
    const user = await User.findById(userId).select('username email');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Failed to fetch user profile' });
  }
};