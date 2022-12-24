const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const rfs = require('rotating-file-stream')
const path = require('path')

const { Router } = require('./middleware')

const PORT = process.env.PORT || 8080

const app = express()

const logStream = rfs.createStream('access.log', {
    interval: '1d',
    path: path.join(__dirname, 'log')
})

/**
 * log request in custom format:
 * [24/Dec/2022:19:14:46 +0000] ::1 - PostmanRuntime/7.29.2 "GET /resource HTTP/1.1" | 200 24.461
 */
morgan.format('custom', '[:date[clf]] :remote-addr :remote-user :user-agent ":method :url HTTP/:http-version" | :status :total-time')

app.use(morgan('custom', {
    stream: logStream
}))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(Router)

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT)
})
