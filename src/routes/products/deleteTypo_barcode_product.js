const Barcode = require('../../models/Barcode')

const express = require('express')
const router = express.Router()

router.delete('/deleteTypo-barcode', (req, res) => {
  deleteBarCode(req.body.barcode, req, res)
})
  
  const deleteBarCode = (barcode, req, res) => {
    Barcode.findOneAndDelete({ barcode }).then((done) => {
      console.log(done)
      res.send(done)
    }).catch((e) => {
      console.log(e)
      res.status(404).send('barCode not exist')
    })
  }
module.exports = router