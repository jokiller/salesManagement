const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
  last_name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  first_name: {
    type: String,
    required: true,
    unique: true, 
    trim: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    trim: true
  },
  address: {
    type: String, 
    required: true,
    trim: true
  },
  limit_credit: {
    type: Number,
    trim: true,
    default: 0,
  },
  remaining_credit: {
    type: Number,
    trim: true,
    default: 0,
  },
  payment_dead_line: {
    type: Date,
    default: Date.now()
  }
}, {
  timestamps: true,
})

const Client = mongoose.model('client', clientSchema)

module.exports = Client