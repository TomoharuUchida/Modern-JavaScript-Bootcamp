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
    // 入れ物を先にqueryselectしておく
    const todoEl = document.querySelector("#todos")

    let filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const imcompleteTodos = todos.filter((todo) => !todo.completed)

    // データの取得が済んだ後、要素をレンダーする前にdivの中をクリアする
    todoEl.innerHTML = ''

    todoEl.appendChild(generateSummaryDOM(imcompleteTodos))

    if (filteredTodos.length === 0) {
        const emptyMessageEl = document.createElement('p')
        emptyMessageEl.classList.add('empty-message')
        emptyMessageEl.textContent = 'No to-dos to show'
        todoEl.appendChild(emptyMessageEl)
    } else {
        filteredTodos.forEach((todo) =>{
        todoEl.appendChild(generateTodoDOM(todo))
    })
    }
}

// Get the DOM elements for an  individual notes
const generateTodoDOM = (todo) =>{
    const todoEL = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    // DOMを作るときにcheckedの値を代入しておく
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    todoEL.appendChild(checkbox)
    checkbox.addEventListener('change', (e) =>{
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })

    // createElする順番にも注意する
    // Setup the todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    // Setup container
    todoEL.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEL.appendChild(containerEl)
    
    // Setup the remove button
    removeButton.textContent = 'Remove'
    removeButton.classList.add('button','button--text')
    todoEL.appendChild(removeButton)

    return todoEL
}

// Get the DOM elements for list summmary
const generateSummaryDOM = (imcompleteTodos) => {
    const summary = document.createElement('h2')
    // 条件分岐でもtextContentを書き分ける方法でもよいが...
    const plural = imcompleteTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${imcompleteTodos.length} todo${plural} left.`
    document.querySelector('#todos').appendChild(summary)
    
    return summary
}