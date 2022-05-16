const square = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Andrew',
    age:27
}, {
    name: 'Vikram',
    age:31
}, {
    naem: 'Jess',
    age:22
    }
]

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

