const Product = require('../../models/Product')

const express = require('express')

const router = express.Router()


router.put('/update-product', (req, res)=>{
    let editProd = {}
    if (req.body.id) editProd.id = req.body.id
    if(req.body.reference) editProd.reference = req.body.reference
    if(req.body.type) editProd.product_company = req.body.type
    if(req.body.category) editProd.category = req.body.category
    if(req.body.price) editProd.price = req.body.price
    if(req.body.brand) editProd.brand = req.body.brand
    if(req.body.expiration_date) editProd.expiration = new Date(req.body.expiration_date)

  // const editProd = new Product()
    // finding product to modify its information using id 
 
  Product.findById(req.body.id).then((prod) => {
    Product.updateOne(prod, editProd).then((editProduct)=>{
        res.send(editProduct)
        }).catch((_) => {
            console.log(_)
        })
  }).catch((_) => {
      console.log('not found')
      res.send({error: 'id product not exist'})
    })

})

module.exports = router