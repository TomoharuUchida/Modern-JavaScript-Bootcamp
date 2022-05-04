// the only diffrence between let based variables and const based variables is that you can't reassign

// let isRaining = true

// isRaining = false

// console.log(isRaining)

const isRaining = true

// TypeError: Assignment to constant variable.
// isRaining = false

console.log(isRaining)

// const -> const is a variable whose value is never going to changeと思う
const person = {
    age: 35
}

// person = {} これはreassignとなりエラー
// propertyを上書きすることは問題ない
person.age= 100

console.log(person)