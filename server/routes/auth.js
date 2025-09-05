// backend/routes/auth.js
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/UsersModel.js';

const router = express.Router();

// Register Admin
router.post('/register', async (req, res) => {
  try {
    const { email, password, usertype } = req.body;

    // check if email already exists
    const existing = await Admin.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({ 
      email, 
      password: hashedPassword, 
      usertype: usertype || "admin" 
    });

    await admin.save();
    res.status(201).json({ message: 'Admin enregistré avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login Admin
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: 'Identifiants invalides' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Identifiants invalides' });

    // include usertype in token
    const token = jwt.sign(
      { id: admin._id, usertype: admin.usertype },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // return token + user info
    res.json({ 
      token, 
      user: { id: admin._id, email: admin.email, usertype: admin.usertype }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Verify Token
router.get('/verify', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Pas de token fourni' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id).select('-password');
    if (!admin) return res.status(401).json({ message: 'Token invalide' });

    res.json(admin);
  } catch (error) {
    res.status(401).json({ message: 'Token invalide' });
  }
});

export default router;
