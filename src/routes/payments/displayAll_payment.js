const Payment = require('../../models/Payment')
const Client = require('../../models/Client')

const express = require('express')

const router = express.Router()

router.get('/displayAll-payment', (req, res)=>{
  Client.find({}).then((cl) => {
    Payment.find({ id_client: cl.id }).then((pay) => {
      res.send(pay)
    }).catch((e) => console.log(e))
    }).catch((e)=>{
      res.send(e)
    })
})

module.exports = router