// Global scope (convertFahrenheitToCelsius, tempOne,tempTwo)
    // Local scope (fahrenheit,celsius)
        // Local scope (isFreezing)


let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsiius = (fahrenheit - 32) * 5 / 9

    if (celsiius <=0) {
        let isFreezing = true
    }

    return celsiius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)