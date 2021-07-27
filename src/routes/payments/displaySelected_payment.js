const Client = require('../../models/Client')
const Payment = require('../../models/Payment')

const express = require('express')
const router = express.Router()

router.get('/displaySelected-payment', (req, res)=>{
  Payment.find(req.body.id).then((pay)=>{
    Client.find({id: pay.id_client}).then((paycli)=>{
      res.send(paycli)
    })
    res.send(pay)
  })
})

module.exports = router