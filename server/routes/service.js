import express from 'express';
import Services from '../models/ServicesModel.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Add Service (admin)
router.post('/', auth, async (req, res) => {
  try {
    const service = new Services({
      title: req.body.title,
      properties: req.body.properties ? req.body.properties.split(',').map(prop => prop.trim()) : [],
      price: req.body.price,
      monthprice: req.body.monthprice,
      button: req.body.button,
      popular: req.body.popular === 'true',
      showOnMainPage: req.body.showOnMainPage === 'true',
    });
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    console.error('Error adding service:', error);
    res.status(500).json({ message: error.message || 'Failed to add service' });
  }
});

// Get all Services (public)
router.get('/', async (req, res) => {
  try {
    const services = await Services.find();
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: error.message });
  }
});

// Remove Service (admin)
router.delete('/:id', auth, async (req, res) => {
  try {
    const service = await Services.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json({ message: 'Service deleted' });
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ message: error.message });
  }
});

// Toggle showOnMainPage (admin)
router.patch('/:id/toggle', auth, async (req, res) => {
  try {
    const service = await Services.findById(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    service.showOnMainPage = !service.showOnMainPage;
    await service.save();
    res.json(service);
  } catch (error) {
    console.error('Error toggling service visibility:', error);
    res.status(500).json({ message: error.message });
  }
});

// Toggle popular (admin)
router.patch('/:id/toggle-popular', auth, async (req, res) => {
  try {
    const service = await Services.findById(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    service.popular = !service.popular;
    await service.save();
    res.json(service);
  } catch (error) {
    console.error('Error toggling service popular status:', error);
    res.status(500).json({ message: error.message });
  }
});

// Update Service (admin)
router.put('/:id', auth, async (req, res) => {
  try {
    const service = await Services.findById(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    service.title = req.body.title;
    service.properties = req.body.properties ? req.body.properties.split(',').map(prop => prop.trim()) : [];
    service.price = req.body.price;
    service.monthprice = req.body.monthprice;
    service.button = req.body.button;
    service.popular = req.body.popular === 'true';
    service.showOnMainPage = req.body.showOnMainPage === 'true';
    await service.save();
    res.json(service);
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ message: error.message || 'Failed to update service' });
  }
});

export default router;