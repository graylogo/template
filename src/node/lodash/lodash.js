const _ = require('lodash')
const arr1 = [1, 2, 3, 4, 5, 6, 7, 1]
const arr2 = [
  {
    name: 'wang',
    age: 10,
    sex: true
  },
  {
    name: 'brew',
    age: 10,
    sex: false
  }
]
const arr3 = [1, 2,
  {
    name: 'wang',
    age: 10,
    sex: true
  },
  {
    name: 'wang1',
    age: 10,
    sex: true
  },
  {
    name: 'brew',
    age: 10,
    sex: false
  }]
// 数字0前面都是假值                                注意： []是真
const arr4 = [false, null, undefined, '', NaN, 0, '0', [], true, 1, '2', { name: 'wang', age: 10, sex: true }]

// const sum = _.chunk(arr2, 2)
// const sum = _.compact(arr4) // 过滤掉假的值
// const sum = _.concat(arr1, '0', [3], null)  // 连接多个  返回新的数组
// const sum = _.concat(arr1, arr3, arr4)
// const sum = _.difference(arr4, [null, ...arr3]) // 返回过滤2后1的数组（类似差集）
// const sum = _.difference([{ name: 'wang' }], [{ name: 'wang' }]) // 注意： 数组里的对象并不能检测成功   ，还是会返回[{name: 'wang'}]  使用下面这个⬇️
// const sum = _.differenceBy([{ name: 'wang' }], [{ name: 'wang' }], 'name') // 这样就能检测数组了

// const sum = _.drop(arr3, 3) // 去除数组前面的前5个数据，返回剩下的数据 默认第二个参数为1
// const sum = _.dropRight(arr3, 3) // 去除数组后面的前5个数据，返回剩下的数据 默认第二个参数为1
// const sum = _.dropRightWhile(arr3, i => !i.sex)  // 单遇到假值以后就不再返回了  ❌
// const sum = _.dropRightWhile(arr3, i => i.sex) // 单遇到假值以后就不再返回了  ❌

// const sum = String(1).padStart(2, 0) // 目标是两位，使用0填充   ✅
// const sum = _.fill(arr1, 'a')
// const sum = _.findIndex(arr3, i => i.sex, 2) // 从左边开始搜索，第三个参数表示从哪里开始
// const sum = _.findLastIndex(arr3, i => i.sex) // 从右边开始搜索
// const sum = arr3.findIndex(i => i.sex)
// const sum = _.head(arr1)
// const sum = _.flatten([1, 2, 3, 4,5, 6, 7, [6], [7, [8]]])  // 减少一层数组
// const sum = _.flattenDeep([1, 2, 3, 4, 5, 6, 7, [6], [7, [8]]]) // 把数组处理为一维数组
// const sum = _.fromPairs([['fred', 30], ['barney', 40]]) // 转换为对象
// const sum = _.indexOf(arr1, 2, 0) // 接收第三个参数，如果是负数，表示从后往前找
// const sum = _.intersection(arr1, arr3) // 交集，只能检测数组，不能检测数组对象  并且还去重了
// const sum = arr1.filter(item => new Set(arr3).has(item))  //ES6 交集
// const sum = Array.from(new Set(arr1.filter(item => new Set(arr3).has(item)))) // ES6 交集 && 去重
// const sum = _.intersectionBy(arr3, arr2, 'name')
// const sum = _.intersectionWith(arr3, arr2, _.isEqual)  //交集  数组对象   ✅
// const sum = _.intersectionWith(arr3, arr2, (i, j) => i.name === j.name) // 交集  数组对象  ✅  可定制性更强
// const sum = _.join(arr1, '~')           // arr  --> str  🙌
// const sum = _.split('1~2~3', '~')        // str  --> arr    🙌
// const sum = _.nth(arr1, 1)   //返回数组的第n个元素
// const sum = _.pull(arr1, ...arr3) // 差集   第二个参数接收的是多个参数，并不是数组   改变原来的数组
const sum = _.pullAll(arr1, arr3) // 差集   第二参数是数组   改变原来的数组

// console.clear()
console.log(sum, arr1)

