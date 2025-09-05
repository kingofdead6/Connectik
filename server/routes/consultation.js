import express from 'express';
import Consultation from '../models/ConsultationsModel.js';
import auth from '../middleware/auth.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Add Consultation (public)
router.post(
  '/',
  [
    body('fullName').notEmpty().trim().withMessage('Full name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
    body('projectType').notEmpty().withMessage('Project type is required'),
    body('timeline').notEmpty().withMessage('Timeline is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const consultation = new Consultation({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone || '',
        company: req.body.company || '',
        projectType: req.body.projectType,
        otherProjectType: req.body.otherProjectType || '',
        timeline: req.body.timeline,
        description: req.body.description || '',
      });
      await consultation.save();
      res.status(201).json(consultation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// Get all Consultations (admin)
router.get('/', auth, async (req, res) => {
  try {
    const consultations = await Consultation.find();
    res.json(consultations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remove Consultation
router.delete('/:id', auth, async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndDelete(req.params.id);
    if (!consultation) return res.status(404).json({ message: 'Consultation not found' });
    res.json({ message: 'Consultation deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Toggle seen
router.patch('/:id/toggle-seen', auth, async (req, res) => {
  try {
    const consultation = await Consultation.findById(req.params.id);
    if (!consultation) return res.status(404).json({ message: 'Consultation not found' });
    consultation.seen = !consultation.seen;
    await consultation.save();
    res.json(consultation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;