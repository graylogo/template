const http = require('http')
const url = require('url')
const qs = require('querystring')

const PORT = 3001

// 1. 普通的创建
const server = http.createServer((req, res) => {
  // req三个重要参数
  console.log(req.url, 'url')
  console.log(req.method, 'method')
  console.log(req.headers, 'headers')

  // 处理url
  const { pathname, query } = url.parse(req.url)
  console.log(pathname, 'pathname')
  const { name, pasword } = qs.parse(query)
  console.log(name, pasword)

  // 处理POST请求
  if (req.method === 'POST') {
    // 设置编码，默认是binary
    req.setEncoding('utf-8')
    // 监听Stream
    req.on('data', data => {
      const { username, password } = JSON.parse(data)
      console.log(username, password)
    })
  }
  res.end('hello,中文')
})

// NOTE http监听地址的区别
/**
 *  localhost   域名，解析为127.0.0.1
 * 127.0.0.1   回环地址，在传输的网络层被捕获，所以局域网内别人访问不了。只能自己访问
 * 0.0.0.0    局域网内可以访问，常用（也是默认值）
 */

server.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('服务器启动成功！' + PORT)
})

// 2. 通过new的方式创建
const server2 = new http.Server((req, res) => {
  res.end('hello，服务器2')
})

server2.listen(3002, (err) => {
  if (err) {
    console.log(err)
    return
  }
  // 拿到端口号 xxx.address().port)
  console.log('服务器启动成功！' + server2.address().port)
})

