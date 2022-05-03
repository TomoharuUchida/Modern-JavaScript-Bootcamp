// Function - input(argument),code,output(return value)

let greetUser = function () {
    console.log("Welcome user!")
}

greetUser()

// returnは一度しか使えない
// 戻り値は、ただの値にしているので、変数に格納して、他の関数(console.log)で使う

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge Area

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsiius = (fahrenheit - 32) * 5 / 9
    return celsiius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)

