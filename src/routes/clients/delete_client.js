const Client = require('../../models/Client')

const express = require('express')
const router = express.Router()

router.delete('/delete-client', (req, res) => {
  Client.findByIdAndDelete(req.body.id).then((client) => {
    if(client.remaining_credit = 0) {
      res.send({success: 'the client has been deleted'})
    } else {
      res.send({error: 'the client has a loan that he has not paid'})  
    }

    }).catch((e) => {
        console.log(e);
    })
})

module.exports = router