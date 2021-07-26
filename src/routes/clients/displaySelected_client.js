const Client = require('../../models/Client')

const express = require('express')

const router = express.Router()

router.get('/displaySelected-client', (req, res) => {
    Client.findById(req.body.id).then((client)=>{
        res.send(client)
    }).catch((e)=>{
        res.send(e)
    })
})

module.exports = router