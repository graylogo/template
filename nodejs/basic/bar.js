let age = 10

const obj = {
  name: 'wang'
}
let arr = [0, 1]
// exports 默认是 {}
// exports.age = age

setTimeout(() => {
  age = 20 // 直接赋值，以后就和原来的值没有关系了
  // 引用赋值   赋的是地址
  obj.name = 'brew'
  arr = [1, 2]
})

// 在开头的时候 module.exports  = exports
module.exports = { age, obj, arr }
