'use strict'
require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 4200

require('./bin/uncaughtException')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('./lib/routes'))
app.listen(port)

require('./lib/mailjet/jobs')
