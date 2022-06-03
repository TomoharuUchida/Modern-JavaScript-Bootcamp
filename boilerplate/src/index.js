// Rest parameters 残余引数構文
// 関数が不定数の引数を配列として受け入れることができる
// ...により、その位置にある残りの引数を配列の中に入れることができる

/*
const calculateAverage = (thing, ...numbers) => {
    let sum = 0
    numbers.forEach((num) => sum += num)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}
console.log(calculateAverage('grade', 0, 100, 88, 64))
*/


const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(` Players: ${players.join(', ')}`)
}

// printTeam('Liberty','Casey','Marge','Aiden','Herbert')

// Spread operator

const team = {
    name: 'Liberty',
    coach: 'Casey',
    players: ['Marge','Aiden','Herbert']
}

// printTeam(team.name, team.coach, ...team.players)

let cities = ['Fukuoka', 'Hiroshima', 'Osaka', 'Nagoya']
let citiesCopy = [...cities,'Tokyo']
// citiesとcitiesCopyは別物で、参照もされない。Tokyoが追加されるのはCopyの方だけ。
// console.log(cities)
// console.log(citiesCopy)

// valueを上書きしたい場合は、スプレッド展開したのちに上書きする,追加は先でもいい
let house = {
    bedroom: 2,
    bathroom: 1.5,
    yearBuilt:2017
}

let newHouse = {
    basement:true,
    ...house,
    bedroom:4
}

// console.log(house)
// console.log(newHouse)

const person = {
    name: 'Uchida',
    age:35
}

const location = {
    city: 'Fukuoka',
    country:'Japan'
}

const overview = {
    ...person,
    ...location
}

// console.log(overview)

// destructuring 分割代入
const todo = {
    id: 'qwersefujiko',
    text: 'Pay the bills',
    completed:false
}

const printTodo = ({text,completed}) => {
    console.log(`${text}: ${completed}`)
}
// 引数はオブジェクトそのもの、関数の定義のときに引数を分割代入で書いておく
printTodo(todo)

const { text: todoText,completed,detail ='No details provided',...others } = todo
console.log(todoText)
console.log(others)
console.log(todo)

const age = [65, 0, 13]
const [firstAge, ...otherAge] = age
console.log(firstAge)
console.log(otherAge)