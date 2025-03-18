const express = require('express')
const router = new express.Router()
const transactionsController = require('../controllers/transactions');

router.get('/account-id/:id/balance', async (req, res) => {
    try {
        const accounts = await transactionsController.getAccountBalance(req.params.id)
         res.status(200).send(accounts)
    } catch (e) {
        console.error(e)
        res.status(400).send('Invalid Request')
    }
})

router.get('/account-id/:id', async (req, res) => {
    try {
        const accounts = await transactionsController.getTransactionsByAccount(req.params.id)
         res.status(200).send(accounts)
    } catch (e) {
        console.error(e)
        res.status(400).send('Invalid Request')
    }
})

router.post('/transfer', async (req, res) => {
    try {
        await transactionsController.acceptTransfer(
            req.body.amount,
            req.body.source_account_id,
            req.body.destination_account_id,
            req.body.reference,
        )
         res.status(202).send()
    } catch (e) {
        console.error(e)
        res.status(400).send('Invalid Request')
    }
})

module.exports = router
