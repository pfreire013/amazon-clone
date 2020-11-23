const functions = require('firebase-functions')

const express = require('express')

const cors = require('cors')

const { request, response } = require('express')

const stripe = require('stripe')('sk_test_51Hqd4qCTLJBreJcRyhOiHTW8uQKJDKucwu109znUQtZgjIQFYjvLZnkZBw3GmamNcOisOpw2qGdqI4iu3A26B09K00SCFifXNB')

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API rutes
app.get('/', (resquest, response) => response.status(200).send('Hello word'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total

  console.log('PAyment resquest recieved BOoMMM', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd'
  })

  response.status(201).send({
    clientSecret: paymentIntent.client_secret

  })
})

// Listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-905ad/us-central1/api
