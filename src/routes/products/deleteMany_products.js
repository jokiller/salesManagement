const Product = require('../../models/Product')
const Barcode = require('../../models/Barcode')

const express = require('express')
const router = express.Router()

router.delete('/deleteMany-products', async (req, res) => {
  const products = req.body.products
    
  await products.map( _ => {
    Product.findByIdAndDelete(_.id).then(async(prod)=>{
      await Barcode.deleteMany({id_product: prod.id}).then((codes)=>{
        console.log(codes)
      }).catch((e)=>{
        console.log(e)
      })  
      
      res.send('delete all selected products!')
    
    }).catch((e) => {
      res.send('product doesnt exist in database')
    })
  })
})

module.exports = router