import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
    fullName: {  type: String,  required: true,  trim: true,},
    email: {  type: String,  required: true,  trim: true,  lowercase: true,  
                             match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],},
    phone: {  type: String,  trim: true,  default: '',},
    company: {  type: String,  trim: true,  default: '',},
    projectType: {  type: String,  required: true,  },
    otherProjectType: {  type: String,  trim: true,  default: '',},
    timeline: {  type: String,  required: true, },
    description: {  type: String,  trim: true,  default: '',},
    seen: {  type: Boolean,  default: false,},
}, {
  timestamps: true,
});

export default mongoose.model('Consultation', consultationSchema);