const Client = require('../../models/Client')

const express = require('express')

const router = express.Router()

router.post('/add-client', (req, res)=>{
    const clients = req.body.clients
    
    clients.map(async(_)=>{
        const last_name = _.last_name
        const first_name = _.first_name
        const phone = _.phone
        const address = _.address
        const limit_credit = _.limit_credit
        const remaining_credit = _.remaining_credit
        const payment_dead_line = _.payment_dead_line

        const creditClient = new Client({
            last_name,
            first_name,
            phone,
            address,
            limit_credit,
            remaining_credit,
            payment_dead_line
        })

        await creditClient.save().then((client) => {
            Client.find({}).then((verify) => {
                if( verify.first_name !== client.first_name && verify.last_name !== client.last_name){
                    
                    res.send('insertion a new Client')
                }else {
                    return res.send('Client exist in client table!')
                }   
            })

        }).catch((err)=>{
            return res.send('failed insertion client(s) ' + err )
        })
    })
})

module.exports = router