// fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed
    }

}

// Render application todos based on filteredTodos
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const imcompleteTodos = todos.filter(function (todo){
        return !todo.completed
    })

    // データの取得が済んだ後、要素をレンダーする前にdivの中をクリアする
    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(imcompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM elements for an  individual notes
const generateTodoDOM = function (todo) {
    const todoEL = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    removeButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })

    
    checkbox.setAttribute('type', 'checkbox')
    // DOMを作るときにcheckedの値を代入しておく
    checkbox.checked = todo.completed
    todoEL.appendChild(checkbox)
    checkbox.addEventListener('change', function (e) {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })
    
    todoText.textContent = todo.text
    todoEL.appendChild(todoText)

    removeButton.textContent = 'x'
    todoEL.appendChild(removeButton)

    return todoEL
}

// Get the DOM elements for list summmary
const generateSummaryDOM = function (imcompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${imcompleteTodos.length} todos left.`
    document.querySelector('#todos').appendChild(summary)

    return summary
}