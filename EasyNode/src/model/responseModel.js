// 处理响应数据的模型
class BaseModel {
  constructor(data, message) {
    // 做一个兼容
    if (typeof data === 'string') {
      this.message = data
      // NOTE 这两行代码的意义
      data = null
      message = null
    }
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

//   成功的model
class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.status = 0
  }
}
// 失败的model
class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.status = -1
  }
}

module.exports = { SuccessModel, ErrorModel }
