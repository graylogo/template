// http也能发送网络请求

const http = require('http')

// 向另一台服务器发送请求
http.get('http://localhost:3001', (res) => {
  res.on('data', data => {
    console.log(data.toString())
  })
})

// 发送post请求.,必须调用end
const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: 3001
}, (res) => {
  res.on('data', data => {
    console.log(data.toString())
  })
})
req.end()
