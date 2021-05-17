const fs = require('fs')
const util = require('util')

// 1
// 把fs封装在Promise里
// const promise = new Promise((resolve, reject) => {
//     // 注意，这是错误前置的回调，err是第一个参数
//   fs.readFile('./localFile/readme.txt', (err, res) => {
//     if (err) reject(err)
//     resolve(res)
//   })
// })
// promise.then(res => {
//   console.log(res.toString())
// }, err => {
//   console.log(err)
// })

// 2
// 封装成函数
// function readFile(path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (err, data) => {
//       if (err) reject(err)
//       resolve(data)
//     })
//   })
// }
// readFile('./localFile/readme.txt').then(res => {
//   console.log(res.toString())
// })

// 3
// 使用util工具 中的promisify 封装一个Promise
const read = util.promisify(fs.readFile)
read('./localFile/readme.md').then(res => {
  console.log(res.toString())
})
