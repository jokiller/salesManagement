const Client = require('../../models/Client')
const Payment = require('../../models/Payment')

const express = require('express')
const router = express.Router()

router.put('/update-payment', (req, res)=>{
  let updateVersement = {}
  if(req.body.price) updateVersement.price = req.body.price

  Payment.findById(req.body.id).then((pay) => {
    Client.find({ id: pay.id_client }).then((editPayment) => {
      cliPay = {}
      cliPay.remaining_credit = 0
  
      cliPay.remaining_credit = (editPayment.remaining_credit + pay.price) - updateVersement.price
      Client.updateOne(editPayment, cliPay).then(()=>{
          console.log(cli)
      }).catch((e) => {
          console.log(e);
      })  
    }).catch((e) => {
        console.log(e);
    })
      Payment.updateOne(pay, updateVersement).then((versement)=>{
        console.log(versement)
        res.send(versement)
      }).catch((_) => {
        console.log(_);
      })
  }).catch((_)=>{
    res.send(_)
  })
})

module.exports = router