const http = require('http')
const { port } = require('../config/config')
const serveHandle = require('../app.js')
const serve = http.createServer(serveHandle)

serve.listen(port)
