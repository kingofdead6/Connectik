import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  email: { type: String , required: true , unique : true} ,
  password: { type: String, required: true },
  usertype: { type: String , required: true , default : "admin"}
});

export default mongoose.model('Admin', adminSchema);