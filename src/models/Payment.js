const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    id_client: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0,
        trim: true
    },
    timestamp: {
        type: Date, default: Date.now()
    }
}, {
  timestamps: true,
})

const Payement = mongoose.model('payement', paymentSchema)

module.exports = Payement