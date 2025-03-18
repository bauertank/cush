const express = require('express')
const router = new express.Router()
const accountsController = require('../controllers/accounts');

router.get('/user-id/:id', async (req, res) => {
    try {
        const accounts = await accountsController.getAccountsForUser(req.params.id)
         res.status(200).send(accounts)
    } catch (e) {
        console.error(e)
        res.status(400).send('Invalid Request')
    }
})

module.exports = router
