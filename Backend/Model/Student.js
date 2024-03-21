const mongoose = require('mongoose');

// Define a schema for your data
const YourDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  DOB: {
    type: Date,
    required: true
  }
}); // Specify the collection name if it doesn't follow the naming convention

// Create a model using the schema
const Data = mongoose.model('Data', YourDataSchema);

module.exports = Data;
