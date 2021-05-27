const http = require('http')
// const url = require('url')
// const time = require('silly-datetime')
const queryString = require('querystring')
http
  .createServer(function(request, response) {
    //   req 获取客户端传过来的信息
    //   res  给浏览器响应信息
    const { method } = request
    response.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' }) // 解决中文乱码，注意没有引号
    const address = request.url
    const query = address.split('?')[1]
    // 使用queryString序列化数据，放在req里面
    request.query = queryString.parse(query) // 能够直接解析 & 号
    // console.log(tools.formatApi(request.url));
    // console.log(tools);
    // console.log(time.format(new Date(), 'YYYY-MM-DD'))
    if (request.url !== '/favicon.ico') {
      // 一定要转换成JSON数据
    //   response.end(JSON.stringify(request.query))
      //   const obj = url.parse(request.url, true).query
      //   console.log(obj.time)
      // 处理post请求
      if (method === 'POST') {
        let postData = ''
        // 使用stream 流来接收数据
        request.on('data', chunk => {
          postData += chunk.toString()
        })
        request.on('end', () => {
          response.end(JSON.stringify(postData))
        })
      }
    }
  })
  .listen(8009)
