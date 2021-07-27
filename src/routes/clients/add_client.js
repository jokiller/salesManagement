const Client = require('../../models/Client')

const express = require('express')
const router = express.Router()

router.post('/add-client', async(req, res)=>{
  const clients = req.body.clients

  await Promise.all(
    clients.map(async (_) => {
        const full_name = _.full_name
        const phone = _.phone
        const address = _.address
        const limit_credit = _.limit_credit
        const remaining_credit = _.remaining_credit
        const payment_dead_line = _.payment_dead_line
    
        const creditClient = new Client({
          full_name,
          phone,
          address,
          limit_credit,
          remaining_credit,
          payment_dead_line
        })
        
        
        await creditClient.save().then(() => {
          res.send({ success: 'all clients have been added successfully :' })
        
        }).catch((e) => res.send({ error: 'failed insertion, client exists: ' }))
    })
  )
})


module.exports = router