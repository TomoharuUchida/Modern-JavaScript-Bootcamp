// Type Coercion - a string, a number, a boolean
// == は絶対に使わない

console.log('5' + 5)
console.log('5' - 5)
console.log(5 === 5)
console.log('5' === 5)

// true は1,falseは0
// typeofは型の確認に使う
const value = true + 12
const type = typeof value
console.log(type)
console.log(value)