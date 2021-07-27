const Client = require('../../models/Client')
const Payment = require('../../models/Payment')

const express = require('express')
const router = express.Router()

router.delete('/delete-payment', (req, res) => {
  Payment.findByIdAndDelete(req.body.id).then((delpay)=>{
    Client.findOne({ id: delpay.id_client }).then((cl) => {
      deleFact = {}
      if (delay.price = 0) {
        return ({error: 'the canceled price is empty'})
      }
      delFact.remaining_credit = 0
      delFact.remaining_credit = cl.remaining_credit + delay.price

      Client.updateOne(cli, delFact).then((mis) => {
        log(mis)
      }).catch((e) => {
        log(e)
      })
    }).catch((e)=>{
      res.send(e)
    })
      
    res.send('the payment has been deleted!')
  }).catch((e)=>{
    res.send(e)
  })
})

module.exports = router