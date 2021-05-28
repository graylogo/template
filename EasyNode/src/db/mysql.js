// 连接mysql
const mysql = require('mysql')
const { mysqlConfig } = require('../../config/config.js')

const connection = mysql.createConnection(mysqlConfig)

// 开始连接
connection.connect()

// 结束连接
// connection.end()

// function executeSql(sql, callback) {
//   // 执行sql的函数
//   connection.query(sql, callback)
// }

// 将执行sql的函数封装成promise
const executeSql = function executeSql(sql) {
  const promise = new Promise((resolve, reject) => {
    connection.query(sql, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve(res)
    })
  })
  return promise
}

module.exports = { executeSql }
