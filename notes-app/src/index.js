import { getNotes,createNote,removeNote,sortNotes,updateNote } from './notes'
import { setFilters } from './filters'
import { renderNotes} from './views'

console.log(getNotes())
updateNote("86785062-d193-4eb4-bb90-64d4ab59d0f5", {
    title: 'test3'
})
// updateNote()
renderNotes()

document.querySelector('#create-note').addEventListener('click', (e)=> {
    const id = createNote()
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    // inputイベントのたびに呼び出す
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        renderNotes()
    }
})