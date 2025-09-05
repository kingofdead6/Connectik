import express from 'express';
import NewsLetter from '../models/NewsLetterModel.js';
import auth from '../middleware/auth.js';
import validator from 'validator';

const router = express.Router();

// Add NewsLetter (public)
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ message: 'Valid email is required' });
    }
    const existing = await NewsLetter.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }
    const newsLetter = new NewsLetter({ email });
    await newsLetter.save();
    res.status(201).json(newsLetter);
  } catch (error) {
    console.error('Error adding newsletter:', error);
    res.status(500).json({ message: error.message || 'Failed to subscribe' });
  }
});

// Get all NewsLetters (admin)
router.get('/', auth, async (req, res) => {
  try {
    const newsLetters = await NewsLetter.find();
    res.json(newsLetters);
  } catch (error) {
    console.error('Error fetching newsletters:', error);
    res.status(500).json({ message: error.message });
  }
});

// Remove NewsLetter
router.delete('/:id', auth, async (req, res) => {
  try {
    const newsLetter = await NewsLetter.findByIdAndDelete(req.params.id);
    if (!newsLetter) return res.status(404).json({ message: 'Subscription not found' });
    res.json({ message: 'Subscription deleted' });
  } catch (error) {
    console.error('Error deleting newsletter:', error);
    res.status(500).json({ message: error.message });
  }
});

// Remove Multiple NewsLetters
router.delete('/', auth, async (req, res) => {
  try {
    const { ids } = req.body;
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'No subscriptions selected' });
    }
    const result = await NewsLetter.deleteMany({ _id: { $in: ids } });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'No subscriptions found' });
    }
    res.json({ message: `${result.deletedCount} subscription(s) deleted` });
  } catch (error) {
    console.error('Error deleting multiple newsletters:', error);
    res.status(500).json({ message: error.message });
  }
});



export default router;