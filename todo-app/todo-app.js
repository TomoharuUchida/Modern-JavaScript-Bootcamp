'use strict'

let todos = getSavedTodos()

// 全部表示の反転キーを、このオブジェクトに持たせる
// check,uncheckで処理（関数）を分ける必要はない。処理の対象をフィルタリングする。
const filters = {
    searchText: '',
    hideCompleted: false
}


// const renderTodos = function (todos,filters) {
//     let filteredTodos = todos.filter(function (todo) {
//         const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
//         const hideCompletedMatch = !filters.hideCompleted || !todo.completed

//         return searchTextMatch && hideCompletedMatch
//     })

//     const imcompleteTodos = filteredTodos.filter(function (todo){
//         return !todo.completed
//     })
//     // データの取得が済んだ後、要素をレンダーする前にdivの中をクリアする
//     document.querySelector('#todos').innerHTML = ''

//     const summary = document.createElement('h2')
//     summary.textContent = `You have ${imcompleteTodos.length} todos left.`
//     document.querySelector('#todos').appendChild(summary)

//     filteredTodos.forEach(function (todo) {
//         const p = document.createElement('p')
//         if (todo.text.length> 0) {
//             p.textContent = todo.text
//         } else {
//             p.textContent ='Unnamed todo'
//         }
        
//         document.querySelector('#todos').appendChild(p)
//     })
// }

renderTodos(todos,filters)

// Listen for new todo creation
// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     console.log('I added an event!')
// })

// Listen for todo text change
// document.querySelector('#new-todo-text').addEventListener('input', function (e) {
//     console.log(e.target.value)
// })

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.elements.text.value)
    todos.push({
        id:uuidv4(),
        text: e.target.elements.text.value,
        completed:false
    })
    saveTodos(todos)
    renderTodos(todos,filters)

    e.target.elements.text.value = ''
})

document.querySelector('#hideCompleted').addEventListener('change', (e) => {
    // checkedを忘れがち
    filters.hideCompleted = e.target.checked
    renderTodos(todos,filters)
})

// theを含んでいたらremoveする
// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//     if (p.textContent.includes('the')) {
//         p.remove()
//     } 
// })