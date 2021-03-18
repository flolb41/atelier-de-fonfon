const mongoose = require('mongoose');

const othercreationSchema = mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  taille: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number }
});
  
module.exports = mongoose.model('Othercreation', othercreationSchema);