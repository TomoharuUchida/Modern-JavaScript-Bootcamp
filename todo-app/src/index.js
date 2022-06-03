// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary
// --

// Add necessary imports
import { setFilters } from './filters'
import { loadTodos,createTodo,saveTodos } from './todos'
import {renderTodos} from './views'


// Render initial todos
renderTodos()

// Set up search text handler
document.querySelector("#search-text").addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

// Set up checkbox handler
document.querySelector("#hideCompleted").addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

// Set up form submission handler
document.querySelector("#new-todo").addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()

    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.text.value =''
    }
})


// Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})

// createTodo('This is a test')

// 途中の確認作業
// getFilters,setFiltersをconsole.logで接続確認
// getTodos,createTodo（引数はハードコーディングで）を接続確認
// toggleTodo,removeTodo（どちらも引数はハードコーディングで）を接続確認
