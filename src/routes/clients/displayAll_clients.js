const Client = require('../../models/Client')

const express = require('express')
const router = express.Router()

router.get('/displayAll-clients', (req, res)=>{
    Client.find({}).then((cli)=>{
        res.send(cli)
    }).catch((e)=>{
        res.send({error: 'something went wrong: ' + e})
    })
})

module.exports = router