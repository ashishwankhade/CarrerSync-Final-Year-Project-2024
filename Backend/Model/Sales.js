const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  _id: Number,
  quantity: Number,
  price: Number,
  targetPrice: Number,
}); // Specify the collection name if it doesn't follow the naming convention

const Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;
