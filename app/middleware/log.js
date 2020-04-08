function log (req, res, next) {
  console.log('请求来了')

  next()
}

module.exports = log
