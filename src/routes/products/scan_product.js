const Barcode = require('../../models/Barcode')
const Product = require('../../models/Product')

const express = require('express')

const router = express.Router()

router.get('/scanCode-product', (req, res) => {
    Barcode.findOne({ barcode: req.body.barcode }).then((code)=>{
        Product.findById(code.id_product).then((prod)=>{
            res.send(prod)
        }).catch((e)=>{
            console.log(e)
        })
    }).catch(() => {
        console.log('barcode not exist')
        res.send('barcode no exist !!')
    })
})

module.exports = router