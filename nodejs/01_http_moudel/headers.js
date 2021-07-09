const http = require('http')

const PORT = 3001

const server = http.createServer((req, res) => {
  // 解决中文乱码问题
  // res.statusCode = 401;
  res.writeHead(200, { 'Content-type': 'text/plain; charset=utf-8' })
  // res.end('中文')
  res.write('第一次响应')
  res.write('第二次响应')
  res.end('结束')
})

server.listen(PORT, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('服务器启动成功！' + PORT)
})

