const mongoose = require('mongoose')

const barcodeSchema = mongoose.Schema({
  barcode: {
    type: String,
    unique: true,
    trim: true
  },
  id_product: {
    type: String,
    required: true,
    trim: true
  }
})
barcodeSchema.index({ barcode: 1 }, { unique: true })

const Barcode = mongoose.model('barcode', barcodeSchema)

module.exports = Barcode