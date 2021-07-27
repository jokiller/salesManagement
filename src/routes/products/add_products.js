const Barcode = require('../../models/Barcode')
const Product = require('../../models/Product')

const express = require('express')

const router = express.Router()

router.post('/add-product', async (req, res) => {
  const products = req.body.products
  const found = []

  const promises = products.map(async (ps) => {
    const promises2 = ps.barcode.map(async (barcode) => {
      await Barcode.findOne({ barcode }).then((bars) => {
        if(bars)
          found.push(bars)
      }).catch((e) => console.log(e))
    })
    await Promise.all(promises2)
  })

  await Promise.all(promises)

  if (found.length !== 0) {
    return res.send(found)  // barcodes have already been used so nothing has been added!
  }
  const awaitpromises = products.map(async (_) => {
    const reference = _.reference
    const type = _.type
    const category = _.category
    const brand = _.brand
    const price = _.price
    const expiration_date = new Date(_.expiration_date)
    const barcodes = _.barcode

    const product = new Product({
      reference,
      type,
      category,
      brand,
      price,
      expiration_date,
    })

    await product.save().then(async(prod) => {
      barcodes.map((_) => {
        const code = new Barcode({
          barcode : _,
          id_product: prod.id
        })
        code.save().then((cods) => {
          console.log(cods)
        }).catch((e) => console.log(e))
      })
    
      res.send('all Products have been added')
    }).catch((e) => console.log(e))
  })

  await Promise.all(awaitpromises)
  res.send('all Products have been added successfully')
})

module.exports = router