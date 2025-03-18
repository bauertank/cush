const express = require('express');
const serverless = require('serverless-http');
const router = require('./routers/transactions')

const app = express();
app.use(express.json())
app.use('/transactions/', router)

/* eslint-disable-next-line */
app.use(function (req, res, next) {
  res.status(404).send({ error: "Invalid route" })
})

module.exports.handler = serverless(app);