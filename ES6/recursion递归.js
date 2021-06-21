// 递归
// 1. 自身调用
// 2. 找到出口  （找到已知条件）
// 3. 先执行的后执行完

//  1. 求阶乘  3! = 3*2*1  n! = 1*2*……*(n-1)*n

// 方法一  for循环
// function add(n) {
//   let sum = 1
//   for (let i = 1; i <= n; i++) {
//     sum *= i
//   }
//   return sum
// }
// console.log(add(0))

// 方法二   递归
// const mul = function(n) {
//   if (n === 1 || n === 0) {
//     return 1
//   }
//   return n * mul(n - 1)
// }
// console.log(mul(5))
// 说明：
// n! = n*(n-1)
// mul(5) = 5*mul(4)
// mul(4) = 4*mul(3)
// mul(3) = 3*mul(2)
// mul(2) = 2*mul(1)   // mul(1)是已知条件

// 2. 求斐波那契数列
// 斐波那契数，指的是这样一个数列：1、1、2、3、5、8、13、21、……在数学上，
// 斐波那契数列以如下被以递归的方法定义：F0=1，F1=1，Fn=F(n-1)+F(n-2)（n>=2，n∈N*），
// 用文字来说，就是斐波那契数列由 0 和 1 开始，之后的斐波那契数列系数就由之前的两数相加。
// 方法一 for循环
// function fbnq(n) {
//   let n1 = 1; let n2 = 1; let sum
//   for (let i = 2; i < n; i++) {
//     sum = n1 + n2
//     n1 = n2
//     n2 = sum
//   }
//   return sum
// }
// console.log(fbnq(5))
// 找规律
// f(5) = f(4)+f(3)
// f(4) = f(3)+f(2)
// f(3) = f(2)+ f(1)
// f(2) = f(1)+ f(0)

// 方法二  for循环解构赋值
// function fbnq2(n) {
//   let n1 = 1; let n2 = 1
//   for (let i = 2; i < n; i++) {
//     [n1, n2] = [n2, n1 + n2]
//   }
//   console.log(n2, '解构')
// }
// fbnq2(3)

// 方法三 递归
// function fibonacci(n) {
//   if (n === 1 || n === 2) {
//     return 1
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }
// fibonacci(5)
