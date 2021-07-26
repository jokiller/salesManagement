const mongoose = require('mongoose')

const creditSchema = mongoose.Schema({
  id_product: {
    type: String,
    required: true,
  },
  id_client: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
    default: 1
  }
}, {
  timestamps: true,
})

const Credit = mongoose.model('credit', creditSchema)

module.exports = Credit