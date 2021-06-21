/*
const a = 1
    // ?. 可选链操作符   ES11新语法
const b = a?.toString()
console.log(b, 'aa')
*/

const arr = { a: 1, b: 2, c: { d: 2 }}
const b = { ...arr }
console.log(arr === b)

