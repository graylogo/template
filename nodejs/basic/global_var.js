// var exports = module.exports
// 所以我们可以直接给module.exports赋值，但是不能给exports直接赋值，如果直接给exports赋值，exports和module.exports指向的地址不再相同了，两者失去了联系，require加载的时候是看不到exports的，只能看到module.exports
const { age, obj, arr } = require('./bar')
const foo = require('./foo')

console.log(foo, 'aa')
// 此变量虽然看似全局的，但实际上不是。每个单独的JS文件都有
const path = __dirname
const name = __filename

// console.log(path)
// console.log(name)

// console.clear()
// 拿到当前文件名
console.time('time')
// const arr = name.split('/')
// console.log(arr[arr.length - 1])
// 统计运行时间
console.timeEnd('time')

// process
// console.log(process.argv)

console.log(age, '1')
console.log(obj, '1')
console.log(arr, '1')
setTimeout(() => {
  console.log(age, '2')
  console.log(obj, '2')
  console.log(arr, '2')
}, 2000)

var a = [1, 2, 3, 4]
var b = []
a[0] = 0
b = a
console.log(a, b)
