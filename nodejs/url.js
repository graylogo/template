const url = require('url')

const address = 'http://www.brew.wamg?id=1&age=10'

console.log(url.parse(address, true))

// 没有加true
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.brew.wamg',
//     port: null,
//     hostname: 'www.brew.wamg',
//     hash: null,
//     search: '?id=1',
//     query: 'id=1',
//     pathname: '/',
//     path: '/?id=1',
//     href: 'http://www.brew.wamg/?id=1'
//   }

// 加了第二个参数true  ，query转为对象
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.brew.wamg',
//     port: null,
//     hostname: 'www.brew.wamg',
//     hash: null,
//     search: '?id=1&age=10',
//     query: [Object: null prototype] { id: '1', age: '10' },
//     pathname: '/',
//     path: '/?id=1&age=10',
//     href: 'http://www.brew.wamg/?id=1&age=10'
//   }
