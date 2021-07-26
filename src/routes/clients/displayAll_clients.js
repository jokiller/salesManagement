const Client = require('../../models/Client')

const express = require('express')

const router = express.Router()

router.get('/displayAll-clients', (req, res)=>{
    Client.find({}).then((cli)=>{
        res.send(cli)
    }).catch((_)=>{
        res.send(_)
    })
})

module.exports = router