// 中间件结构
// 1. 是一个函数
// 2. 参数 req, res, next

// 中间件级别
// 1. app 级别
// 2. router 级别（路由是中间件的一种）
// 3. 异常处理

function hasQuery (req, res, next) {
  const {
    name,
  } = req.query

  if (name) {
    next()
  } else {
    res.json({
      message: '缺少name参数'
    })
  }
}

module.exports = hasQuery
