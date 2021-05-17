// const str1 = 'abc'
// const str2 = 'def'

// const temp = ''

// 字符串的拼接
// const temp = str1 + 1   //abc1
// const temp = str1 + null   //abcnull
// const temp = str1 + undefined   //abcundefined

// console.log(temp, temp.length)

// console.log(str1.charAt(1))   // b
// console.log(temp.toString(2))

//  ES6解构赋值
// let x
// if ([1][0] === undefined) {
//   x = f()
// } else {
//   x = [1][0]
// }

// function f() {
//   console.log('aaa')
// }
// console.log(x)

// const [a = 1, b = a] = [3, 4] // 这叫数组解构赋值   可以设置初始值
// const { c } = { c: '1' } // 这叫对象解构赋值
// const { c: d } = { c: '1' } // 这叫对象解构赋值  同样可以重命名
// console.log(a, b, c, d)

// const obj = {
//   arr: [
//     'str',
//     { child: 'children' }
//   ]
// }
// const { arr, arr: [s, { child }] } = obj // 后面一个arr是模式，并不会被赋值
// console.log(s, child, arr)

// const obj = {}
// const arr = [];

// ({ foo: obj.prop, bar: arr[0], def: def1 = 1 } = { foo: 123, bar: true })

// console.log(obj, arr, def1)
// obj // {prop:123}
// arr // [true]
//  def1   1

// const obj = {
//   name: 'wang',
//   age: 0,
//   sex: true
// }
// const arr = [
//   {
//     name: 'wang',
//     age: 0,
//     sex: true
//   },
//   {
//     name: 'brew',
//     age: 0,
//     sex: false
//   }
// ]
// console.log(Object.keys(obj))

// for (const item in obj) {
//   console.log(item)
// //  name
// // age
// // sex
// }
// for (const item in obj) {
//   console.log(obj[item])
// }
// for (const item in arr) {
//   console.log(item) // 0 1
// }
// for (const { name: value } of arr) {
//   console.log(value)
// }

// function f1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('1')
//       resolve()
//     }, 1000)
//   })
// }
// f1().then(() => {
//   console.log('2')
// })

// function sleep(ms) {
//   return new Promise(function(resolve, reject) {
//     console.log('CCC')
//     setTimeout(resolve, ms)
//   })
// }
// async function handle() {
//   console.log('AAA')
//   await sleep(5000).then(() => {
//     setTimeout(() => {
//       console.log('这个在最后执行')
//     }, 3000)
//   })
//   console.log('1111')
//   await sleep(1000)
//   console.log('BBB')
// }
// handle()

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done')
//   })
// }
// timeout(3000).then((value) => {
//   console.log(value)
// })

const promise = new Promise(function(resolve, reject) {
  console.log('Promise')
  resolve()
})

promise.then(function() {
  console.log('resolved.')
})

console.log('Hi!')
