// 处理blog的路由
const { getList, getDetail, addBlog, updateBlog, deleteBlog } = require('../controllers/blog')
const { SuccessModel, ErrorModel } = require('../model/responseModel')

const handleBlog = (req, res) => {
  const id = req.query.id || ''
  const blogData = req.body || {}

  /**
 *  获取博客列表
 * @methods GET
 * @param  {[title]}   标题
 * @param  {[author]}   作者
 */
  if (req.method === 'GET' && req.path === '/api/blog/list') {
    const title = req.query.title || ''
    const author = req.query.author || ''
    const blogDataPromise = getList(author, title)
    return blogDataPromise.then(result => {
      if (result) {
        return new SuccessModel(result)
      }
    })
  }
  /**
 *  获取博客详情
 * @methods GET
 * @param  {[id]}   文章id
 */
  if (req.method === 'GET' && req.path === '/api/blog/detail') {
    return getDetail(id).then(result => {
      if (result) {
        return new SuccessModel(result)
      }
    })
  }
  /**
 *  增加博客
 * @methods POST
 * @param  {[title]}   标题
 * @param  {[author]}   作者
 * @param  {[content]}   内容
 */
  if (req.method === 'POST' && req.path === '/api/blog/add') {
    return addBlog(blogData).then(id => {
      if (id) {
        return new SuccessModel(id)
      }
    }, err => {
      return new ErrorModel(err)
    })
  }
  /**
 *  更新博客
 * @methods POST
 * @param  {[id]}   文章id   地址栏
 * @param  {[title]}   标题
 * @param  {[author]}   作者
 * @param  {[content]}   内容
 */
  if (req.method === 'POST' && req.path === '/api/blog/update') {
    return updateBlog(id, blogData).then(result => {
      if (result) {
        return new SuccessModel({ message: '修改成功！' })
      } else {
        return new ErrorModel({ message: '修改失败' })
      }
    })
  }
  /**
 *  删除博客
 * @methods POST
 * @param  {[id]}   文章id  地址栏
 */
  if (req.method === 'POST' && req.path === '/api/blog/delete') {
    return deleteBlog(id, blogData.author).then(result => {
      if (result) {
        return new SuccessModel({ message: '删除成功！' })
      } else {
        return new ErrorModel({ message: '删除失败' })
      }
    })
  }
}

module.exports = handleBlog
