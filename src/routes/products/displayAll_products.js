const Product = require('../../models/Product')

const express = require('express')

const router = express.Router()

router.get('/displayAll-products', (req, res) => {
    Product.find({}).then((prod) => {
        res.send(prod)
    }).catch(e=> res.send(e))
})

module.exports = router