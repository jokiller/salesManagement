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

    Client.findById(editCli.id).then((client)=>{
        Client.updateOne(client, editCli).then((updateCust) => {
            console.log(updateCust);
        }).catch((_)=>{
            console.log('error modification!')
        })
        
        res.send(editCli)
    }).catch((_)=>{
        console.log('client not found!')
    })
})

module.exports = router