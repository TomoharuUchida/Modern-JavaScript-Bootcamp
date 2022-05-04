// varの3つの性質

var firstName = 'Andrew'
firstName = 'Mike'

// 1 we can declare the same variable twice
// 再宣言が可能、つまり意図せずに変数を書き換えてしまう可能性がある
var firstName = 'Jen'
console.log(firstName)


//  2 block scope ではなく function scope
if (10 === 10) {
    var lastName ='Uchida'
}
// アクセスできてしまう
console.log(lastName)

const setName = function () {
    var fullName ='Tomoharu Uchida'
}

// アクセスできない
// console.log(fullName)

// 3 hoist巻き上げされる
// let,constでは巻き上げされずエラーとなる
console.log(age)
var age
// var age = 10 console.logの結果はundefined,valueまでは巻き上げられない

// var petNameがtopまで巻き上げられるので、Pochiが出力される。
petName = 'Pochi'
console.log(petName)
var petName