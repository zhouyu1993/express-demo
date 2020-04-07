const express = require('express')

const app = express()

const port = 6789

app.get('/', (req, res) => {
  for (let key in req.headers) {
    console.log('http.createServer: ', `${key}: ${req.headers[key]}`)
  }

  res.setHeader('X-1', 1)

  res.writeHead(200, {
    'X-2': '2',
  })

  res.end('Hello, World')
})

app.listen(port, (res) => {
  console.log(`Server running at: http://localhost:${port}/`)
})
