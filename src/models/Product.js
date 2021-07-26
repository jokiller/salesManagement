const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  reference: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true 
  },
  category: {
    type: String,
    required: true,
    trim: true 
  },
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  expiration_date: {
    type: Date,
    required: true,
    trim: true,
  }
})

const Product = mongoose.model('product', productSchema)

module.exports = Product