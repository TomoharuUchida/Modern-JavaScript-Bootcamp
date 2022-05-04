let num = 103.9415

// 四捨五入されること、返り値がstringであることに注意
console.log(num.toFixed(2))

// 数学的なアプリケーションでない限り、これらでほぼ事足りる
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20

// そのままだと0-0.99999
let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
console.log(randomNum)

// Challenge area

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)

    return guess ===randomNum
}

console.log(makeGuess(3))