const math = require('mathjs')

math.config = {
  epsilon: 1e-12,
  matrix: 'Matrix',
  number: 'BigNumber', // 可选值：number BigNumber
  precision: 64,
  predictable: false,
  randomSeed: null
}
console.log(0.1 + 0.2)

console.log(math.add(0.1, 0.2))
