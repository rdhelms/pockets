import express from 'express'

const app = express()
const port = process.env.PORT || 5300

app.use(express.static('client'))

const server = require('http').createServer(app)
server.listen(port)
console.log(`Listening on port ${port}`) // eslint-disable-line no-console
