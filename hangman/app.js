// Primitive value: string,number,boolean,null,undefined

// Object: myObject --> Object.prototypr --> null
// Array; myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// htmlの処理はグローバルで定義し、それをクラスの中に持ってくる
const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const game1 = new Hangman('car parts', 3)

// 返り値は文字列なので同じ型
puzzleEl.textContent = game1.puzzle
guessEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e)=> {
    const guess = String.fromCharCode(e.charCode)

    game1.makeGuess(guess)
    game1.puzzle
    puzzleEl.textContent = game1.puzzle
    guessEl.textContent = game1.statusMessage
})


// よくあるobjectの宣言だが、裏側では、classとinstanceと同じような検索がされている
// const product = {
//     name: 'Influence'
// }
// Object.prototype, hasOwnProperty = () => 'This is the new function.'
// hasOwnProperty return true or false
// console.log(product.hasOwnProperty('name'))

// const product = 'Computer'
// これだとpropertyを持たない
// console.log(product)

// const otherProduct = new String('Phone')
// これだとpropertyを持つようにwrapされている
// console.log(otherProduct)