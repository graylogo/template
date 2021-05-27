// 处理blog的路由
const { getList, getDetail, addBlog, updateBlog, deleteBlog } = require('../controllers/blog')
const { SuccessModel, ErrorModel } = require('../model/responseModel')

const handleBlog = (req, res) => {
  const id = req.query.id || ''
  const blogData = req.body || {}
  // 获取博客列表
  if (req.method === 'GET' && req.path === '/api/blog/list') {
    const name = req.query.name || ''
    const type = req.query.type || ''
    const blogData = getList(name, type)
    return new SuccessModel(blogData)
  }
  // 获取博客详情
  if (req.method === 'GET' && req.path === '/api/blog/detail') {
    return new SuccessModel(getDetail(id))
  }
  // 增加博客
  if (req.method === 'POST' && req.path === '/api/blog/add') {
    return new SuccessModel(addBlog(blogData))
  }
  // 更新博客
  if (req.method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, blogData)
    if (result) {
      return new SuccessModel({ message: '修改成功！' })
    } else {
      return new ErrorModel({ message: '修改失败' })
    }
  }
  // 删除博客
  if (req.method === 'POST' && req.path === '/api/blog/delete') {
    const result = deleteBlog(id, blogData)
    if (result) {
      return new SuccessModel({ message: '删除成功！' })
    } else {
      return new ErrorModel({ message: '删除失败' })
    }
  }
}

module.exports = handleBlog
