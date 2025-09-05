import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import serviceRoutes from './routes/service.js';
import contactUsRoutes from './routes/contact.js';
import newsletterRoutes from './routes/newsletter.js';
import ConsultationRoute from './routes/consultation.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


app.use('/api/services', serviceRoutes);
app.use('/api/contact', contactUsRoutes);
app.use('/api/newsletters', newsletterRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/consultations', ConsultationRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get('/', (req, res) => {
  res.send('Backend API is running');
});