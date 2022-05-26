'use strict'

// fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
 }

const removeTodo = (id) =>{
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const toggleTodo = (id) =>{
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }

}

// Render application todos based on filteredTodos
const renderTodos = (todos, filters) => {
    let filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const imcompleteTodos = todos.filter((todo) => !todo.completed)

    // データの取得が済んだ後、要素をレンダーする前にdivの中をクリアする
    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(imcompleteTodos))

    filteredTodos.forEach((todo) =>{
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM elements for an  individual notes
const generateTodoDOM = (todo) =>{
    const todoEL = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })

    
    checkbox.setAttribute('type', 'checkbox')
    // DOMを作るときにcheckedの値を代入しておく
    checkbox.checked = todo.completed
    todoEL.appendChild(checkbox)
    checkbox.addEventListener('change', (e) =>{
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
const generateSummaryDOM = (imcompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${imcompleteTodos.length} todos left.`
    document.querySelector('#todos').appendChild(summary)

    return summary
}