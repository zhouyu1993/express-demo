const express = require('express')

const router = require('./router')

const log = require('./middleware/log')
const setHeaders = require('./middleware/setHeaders')
const hasQuery = require('./middleware/hasQuery')

const app = express()

const port = 6789

app.use(log, setHeaders)

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World',
  })
})

app.use(router)

app.use('/baseUrl', hasQuery, router)

app.listen(port, (res) => {
  console.log(`Server running at: http://localhost:${port}/`)
})
