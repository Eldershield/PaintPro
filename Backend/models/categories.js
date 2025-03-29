import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  colors: [String],
  selectedColors: [String],
});

const categorySchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  image: String,
  products: [productSchema],
});

const Category = mongoose.model('Category', categorySchema);

export default Category;