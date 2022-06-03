import { getFilters } from './filters'
import {getTodos,toggleTodo,saveTodos,removeTodo} from './todos'
// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
    const todosEl = document.querySelector("#todos")
    const {searchText,hideCompleted} = getFilters()
    const todos = getTodos()
    let filteredTodos = todos.filter((todo)=>{
        const searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase())
        const hideCompletedMatch = !hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const imcompleteTodos = todos.filter((todo) => !todo.completed)
    todosEl.innerHTML = ''
    
    todosEl.appendChild(generateSummaryDOM(imcompleteTodos))

    if (filteredTodos.length === 0) {
        const emptyMessageEl = document.createElement('p')
        emptyMessageEl.classList.add('empty-message')
        emptyMessageEl.textContent = 'No to-dos to show'
        todosEl.appendChild(emptyMessageEl)
    } else {
        filteredTodos.forEach((todo) => {
            todosEl.appendChild(generateTodoDOM(todo))
        })
    }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo) =>{
    const todoEL = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    // DOMを作るときにcheckedの値を代入しておく
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    todoEL.appendChild(checkbox)
    checkbox.addEventListener('change', (e) =>{
        toggleTodo(todo.id)
        renderTodos()
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
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        renderTodos()
    })

    return todoEL
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (imcompleteTodos) => {
     const summary = document.createElement('h2')
    // 条件分岐でもtextContentを書き分ける方法でもよいが...
    const plural = imcompleteTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${imcompleteTodos.length} todo${plural} left.`
    document.querySelector('#todos').appendChild(summary)
    
    return summary
}

// Make sure to set up the exports
export {renderTodos,generateTodoDOM,generateSummaryDOM}