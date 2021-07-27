const Client = require('../../models/Client')
const Payment = require('../../models/Payment')

const express = require('express')
const router = express.Router()

router.post('/add-payment', (req, res)=>{
	const id_client = req.body.id_client
	const price = req.body.price

	const paymentSave = new Payment({
		id_client,
		price,
		date_heure: Date.now()
	})

	paymentSave.save().then((addVersement)=>{
		Client.findOne({ id: addVersement.id_client }).then((cl) => {
			console.log(cl.remaining_credit)
			if (cl.remaining_credit = 0) {
				return ({error: 'there is no unpaid amount for this client'})
			}
				updateCli = {}
				updateCli.remaining_credit = cl.remaining_credit - addVersement.price
				Client.updateOne(cl, updateCli).then((editCli) => {
					console.log('client info updated: ' + editCli);
				}).catch((e) => {
					console.log(e);
				})
		}).catch((e) => {
			res.send({error:'inValid client for this payment: ' + e})
			console.log(e)
		})
		
			res.send(addVersement);
	}).catch((e) => {
			res.send({error:'inValid payment: ' + e})
			console.log(e)
		})
})


module.exports = router