const Product = require('../../models/Product')

const express = require('express')

const router = express.Router()


router.get('/displaySelected-product', (req, res)=>{
    Product.findById(req.body.id).then((prod)=>{
        console.log(prod)
        res.send(prod)
    }).catch((e) => {
        console.log('not exist')
        res.status(404).send({error: 'id product not exist'})
    })
})

module.exports = router
