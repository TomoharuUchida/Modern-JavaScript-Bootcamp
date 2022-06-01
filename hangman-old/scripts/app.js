// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

// Making an HTTP request
/*
const request = new XMLHttpRequest()
// console.log(request)
let data = []
request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place')
    }
})

// request.open('GET', 'https://restcountries.com/v3.1/all')
// request.send()

const countryCode = 'MX'

// requestはインスタンスを作って実行する

*/


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
// const game1 = new Hangman('car parts', 3)
let game1

window.addEventListener('keypress', (e)=> {
    const guess = String.fromCharCode(e.charCode)

    game1.makeGuess(guess)
    render()
})

const render = () => {
    // 返り値は文字列なので同じ型
    puzzleEl.innerHTML = ''
    guessEl.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async() => {
    const puzzle = await getPuzzleOld('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()
/*
getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(`Error: ${err}`)
})
*/
/*
getCurrentCountry().then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})
*/
/*
getCountry('JP').then((country) => {
    console.log(country.name)
}, (err) => {
   console.log(err) 
})
*/

// Fetches readyStateを気にしなくていい
// fetch('http://puzzle.mead.io/puzzle', {}).then(response => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         // Errorのインスタンスを作って処理する（と理解）
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data) => {
//     // promise chainingと同じようにreturnを処理している
//     console.log(data.puzzle)
// }).catch(error => {
//     console.log(error)
// })


/*
getCountry('JP').then((country) => {
    return country
    // console.log(country)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

getLocation('886be57f7a4c73').then((location) => {
    // console.log(location.country)
    return location.country
}).catch((error) => {
    console.log(`Error: ${error}`)
})
*/


// 1st error,2nd success data
// getPuzzle("2",(error, puzzle) => {
//     if (error) {
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(puzzle)        
//     }
// })

// 第二引数に、関数を渡して、getCountryを呼び出している
// getCountry('FR',(error, country) => {
//     if (error) {
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(country.name)
//     }
// })

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