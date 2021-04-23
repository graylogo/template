const http = require('http')
const url = require('url')
const { get } = require('./module1')
const time = require('silly-datetime')
http
  .createServer(function(request, response) {
    //   req 获取客户端传过来的信息
    //   res  给浏览器响应信息
    response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' }) // 解决中文乱码，注意没有引号
    response.end('你好，Hello World!')
    console.log(typeof request.url)
    // console.log(tools.formatApi(request.url));
    // console.log(tools);
    console.log(get)
    console.log(time.format(new Date(), 'YYYY-MM-DD'))
    if (request.url !== '/favicon.ico') {
      const obj = url.parse(request.url, true).query
      console.log(obj.time)
    }
  })
  .listen(8009)
console.log('Server running at http://127.0.0.1:8009/')
