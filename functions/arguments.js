// Multiple arguments
let add = function (a,b,c) {
    return a + b + c;
}

let result = add(10, 1, 3)
console.log(result)

// Default arguments
// template stringは、readable,maintanable
let getScoreText = function (name = 'Anonymous',score = 0) {
    // return 'Name: ' + name + '- Score: ' + score
    return `Name: ${name} - Score: ${score}`
}

// getScoreText() default valueがなければ、引数で何もわたさない時は、undefinedが返る
// 引数の一部がないときは、エラー回避のためundefinedを渡す
let scoreText = getScoreText(undefined,99)
console.log(scoreText)

// Challenge area
// total,tipPercent

let getTip = function (total,tipPercent = .2) {
    // return total * tipPercent
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be ${tip}`
}

let tip = getTip(60)
console.log(tip)