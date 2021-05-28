
// 全局指令
import time from 'silly-datetime'
// 时间格式化
const filters = {}
filters.formateDate = function(val) {
  if (!val) return ''
  return time.format(new Date(val), 'YYYY-MM-DD')
}

export default filters
