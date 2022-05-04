let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Pelples History',
    author: 'Howard Zinn',
    pageCount: 723
}

// 引数の渡し方bookで一般化して渡す。objectで返すことで、複数の内容を返すことができる
let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary)

// Challenge area

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit:fahrenheit,
        celsius:(fahrenheit - 32) * (5 / 9),
        kelvin:(fahrenheit + 459.67)*(5/9),
    }
}

let temps = convertFahrenheit(32)
console.log(temps)