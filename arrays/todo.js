// const todos = ['todo1', 'todo2', 'todo3', 'todo4', 'todo5']
const todos = [{
    text: 'Oeder cat food',
    completed: true
},{
    text: 'Clean kitchen',
    completed: false
},{
    text: 'Buy food',
    completed: true
},{
    text: 'Do work',
    completed: false
},{
    text: 'Exercise',
    completed: true
}]

// textを渡したら合致するindexを返す、そのindexのcompletedを反転するfunction
/*
const convertCompleted = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    todos[index].completed = !todos[index].completed
    return todos[index]
}

console.log(convertCompleted(todos, 'todo1'))*/

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsTodo = function (todos) {
    return todos.filter(function (todo, index) {
        const isTodoCompleted =todo.completed
        return !isTodoCompleted
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        // ifの条件式はtrueかどうかの判定なので、わざわざ===trueと書く必要はない
        // falseが前に来るように並び替え
        if (!a.completed && b.completed){
            return -1
        } else if(!b.completed && a.completed){
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)


// console.log(getThingsTodo(todos))

// console.log(deleteTodo(todos, 'todo6'))
// console.log(todos)




/*
// Challenge area
// Delete the 3rd item
todos.splice(2, 1)

// Add a new item onto the end
todos.push('new item')

// Remove the first item from the list
todos.shift()

console.log(todos)

// console.log(`You have ${todos.length} todos.`)
// console.log(`Todo: ${todos[0]}`)
console.log(`Todo: ${todos[todos.length - 2]}`)

todos.forEach(function (todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})

// for (let count = 0; count < todos.length;index++){
//     const num = count + 1
//     console.log(`${num}. ${todos[index]}`)
// }
*/