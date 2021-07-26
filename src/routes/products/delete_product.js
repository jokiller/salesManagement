const Barcode = require('../../models/Barcode')
const Product = require('../../models/Product')

const express = require('express')

const router = express.Router()

router.delete('/delete-product', (req, res)=>{
        Product.findByIdAndDelete(req.body.id).then((prod) => {
            console.log('deleted: ' + prod)
            Barcode.deleteMany({ id_product: prod.id }).then((codes) => {
            console.log(codes);
            }).catch(e => console.log(e));
            res.send('deleted all codes of the selected product')
        }).catch(e => res.send('barcode doesnt exist in database!'))
})

module.exports = router 