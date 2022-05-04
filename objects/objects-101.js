// how to define an object,to read object properties,to change object properties

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

let userData = {
    name: 'John',
    age: 35,
    location: 'Fukuoka'
}

console.log(`${userData.name} is ${userData.age} and lives in ${userData.location}.`)

userData.age = userData.age + 1

console.log(`${userData.name} is ${userData.age} and lives in ${userData.location}.`)