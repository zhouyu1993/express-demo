function setHeaders (req, res, next) {
  res.append('X-time', Date.now())

  next()
}

module.exports = setHeaders
