const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: true,
    unique: true, 
    trim: true
  },
  phone: {
    type: String,
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
    default: 0
  },
  remaining_credit: {
    type: Number,
    trim: true,
    default: 0
  },
  payment_dead_line: {
    type: Date,
    default: null
  }
}, {
  timestamps: true,
})

const Client = mongoose.model('client', clientSchema)

module.exports = Client