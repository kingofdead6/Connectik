import mongoose from 'mongoose';

const servicesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  properties: { type: [String], required: true },
  price: { type: String, required: true },
  monthprice: { type: String, required: true },
  button : { type: String, required: true },
  popular : {type: Boolean, default: false},
  showOnMainPage: { type: Boolean, default: false },
});

export default mongoose.models.Services || mongoose.model('Services', servicesSchema);