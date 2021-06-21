const handleBlog = require('./src/router/blog')
const queryString = require('querystring')

// 处理POST数据  异步
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    //  兼容了使用axios.post()发送过来的post请求
    if (req.headers['content-type'] !== 'application/json' && req.headers['content-type'] !== 'application/json;charset=UTF-8') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(JSON.parse(postData))
    })
  })
  return promise
}

// createServer的回掉函数
const serveHandle = (req, res) => {
  // 设置响应头
  res.setHeader('Content-Type', 'application/json;charset=utf-8')
  const url = req.url
  req.path = url.split('?')[0]
  req.query = queryString.parse(url.split('?')[1] || '')

  getPostData(req).then(postData => {
    // 将异步返回的postData放在req中，这样get请求也能使用这个数据了
    req.body = postData
    //  NOTE  处理统一的api版本
    // 处理blog  API
    const blogDataPromise = handleBlog(req, res)
    if (blogDataPromise) {
      blogDataPromise.then(blogData => {
        res.end(JSON.stringify(blogData))
      })
      return
    }
    // 处理404
    res.writeHeader(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      status: -1,
      message: '404NotFound'
    }))
  })
}
module.exports = serveHandle
