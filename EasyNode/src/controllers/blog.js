// 控制器

const getList = (name, type) => {
  return [{ a: 1 }]
}
const getDetail = (id) => {
  return { id: 1 }
}
const addBlog = (blogData) => {
  return blogData
}
const updateBlog = (id, blogData) => {
  return true
}
const deleteBlog = (id) => {
  return true
}
module.exports = { getList, getDetail, addBlog, updateBlog, deleteBlog }

