const Client = require('../../models/Client')

const express = require('express')
const router = express.Router()

router.put('/update-client', (req, res) => {
    editCli = {}
    if (req.body.id) editCli.id = req.body.id 
    if(req.body.last_name) editCli.last_name = req.body.last_name
    if(req.body.first_name) editCli.first_name = req.body.first_name
    if(req.body.phone) editCli.phone = req.body.phone
    if(req.body.address) editCli.address = req.body.address
    if(req.body.limit_credit) editCli.limit_credit = req.body.limit_credit
    if(req.body.payment_dead_line) editCli.payment_dead_line = new Date(req.body.payment_dead_line)

    Client.findById(editCli.id).then((client)=>{
        Client.updateOne(client, editCli).then((updateCli) => {
            res.send(updateCli)
            console.log(updateCli);
        }).catch((e)=>{
            console.log(e, 'error modification!')
        })
        
    }).catch((_)=>{
        console.log('client not found!')
        res.send({error: 'client doesnt exist!'})
    })
})

module.exports = router