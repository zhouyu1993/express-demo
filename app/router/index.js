const express = require('express')

const router = express.Router()

router.get('/demo', (req, res) => {
  res.json({
    message: 'demo',
    path: req.originalUrl,
  })
})

module.exports = router
