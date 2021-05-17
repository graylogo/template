// const print = require('./b.js')

// print('aaaa')

// require('./b.js').print('ccc')

import { a } from './c.js'
// 开始import报错，npm init后在package.json中加上  type: module 后就可以了
// 因为 import是ES6规范
console.log(a)

// export命令对外接口是有名称的且import命令从模块导入的变量名与被导入模块对外接口的名称相同，而export default命令对外输出的变量名可以是任意的，这时import命令后面，不使用大括号。
// export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。

// commonjs模块与ES6模块的区别
// require是Commonjs的规范，node应用是由模块组成的，遵从commonjs的规范。用法：
// import是es6为js模块化提出的新的语法，import （导入）要与export（导出）结合使用。用法：
// 1.commonjs输出的，是一个值的拷贝，而es6输出的是值的引用；

// 2.commonjs是运行时加载，es6是编译时输出接口；

