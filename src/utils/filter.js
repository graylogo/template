
// 全局指令
import time from 'silly-datetime'
// 时间格式化
const filters = {}
filters.formateDate = function(val) {
  if (!val) return ''
  return time.format(new Date(val), 'YYYY-MM-DD')
}

// 说明
// filters 点后面的内容就是过滤器的名字 function为回调函数
export default filters
