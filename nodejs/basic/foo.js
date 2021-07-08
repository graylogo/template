// var exports = module.exports
// 所以我们可以直接给module.exports赋值，但是不能给exports直接赋值，如果直接给exports赋值，exports和module.exports指向的地址不再相同了，两者失去了联系，require加载的时候是看不到exports的，只能看到module.exports
// exports = { b: 2 }   // {}
// exports.a = 1 // {a:1}
// module.exports = 1 // 1
console.log(new Error('aa'))

module.exports = { // {a:100}
  a: 100
}
