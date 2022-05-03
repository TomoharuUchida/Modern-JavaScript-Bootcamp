// Undefinde for variables
// 変数を宣言して、何も代入しなければundefinedとなる
let name

name = "Jen"

if (name === undefined) {
    console.log("Please provide a name")
} else {
    console.log(name)
}

// Undefined for function arguments
// Undefiend as function return default value
// 呼び出す際に引数がなければ、numにはundefinedが渡される。関数もndefinedを返す

let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

// Null as assigned value
let age = 35
age = null

console.log(age)