// DOMへのアクセスは最初だけにする
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')

// 先頭の#を除くためのsubstring
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (!note) {
    location.assign('/notes-app/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

// btn作ってclickイベントではなく、inputでボタンなしで処理にする
titleElement.addEventListener('input', (e) => {
    // 参照渡しで変わるので、todosのindexを指定して..とか不要
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/notes-app/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
    // window要素の中のe.newvalueを使う
    notes = JSON.parse(e.newValue)
    note = notes.find((note) => note.id === noteId)

    if (!note) {
        location.assign('/notes-app/index.html')
    }

    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)

    }   
})