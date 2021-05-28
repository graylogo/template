// 控制器
const { executeSql } = require('../db/mysql')

const getList = (author, title) => {
  let sql = `SELECT * FROM blog_list WHERE 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }
  if (title) {
    sql += `and title like '%${title}%'`
  }
  // 以下是回调函数的方式
  // executeSql(sql, (err, res) => {
  //   if (err) {
  //     console.log(err)
  //     return
  //   }
  //   console.log(res)
  // })

  // 以下是promise的方式
  //   executeSql(sql).then(res => {
  //     console.log(res)
  //   })
  return executeSql(sql)
}
const getDetail = (id) => {
  const sql = `SELECT * FROM blog_list WHERE id=${id};`
  return executeSql(sql).then(rows => {
    return rows[0]
  })
}
const addBlog = ({ title, author, content }) => {
  const sql = `INSERT INTO blog_list (title,author,content) VALUES ('${title}','${author}','${content}');`
  return executeSql(sql).then(detail => {
    return { id: detail.insertId }
  })
}
const updateBlog = (id, { title, author, content }) => {
  const sql = `UPDATE blog_list SET title = '${title}', author = '${author}' , content = '${content}' WHERE id=${id};`
  return executeSql(sql).then(updateDate => {
    if (updateDate.affectedRows > 0) {
      return true
    }
    return false
  })
}
const deleteBlog = (id, author) => {
  const sql = `DELETE FROM blog_list WHERE id = ${id} and author = '${author}';`
  return executeSql(sql).then(result => {
    if (result.affectedRows > 0) {
      return true
    }
    return false
  }).catch(() => {
    return false
  })
}
module.exports = { getList, getDetail, addBlog, updateBlog, deleteBlog }

