import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
});

mongoose.model('products', productSchema);
