'use strict'

// Read existing notes from localStorage
const getSavedNotes =  ()=> {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

const saveNotes =  (notes) => {
    localStorage.setItem('notes',JSON.stringify(notes))
}

// Remove the note from the list
const removeNote = (id) =>{
    const noteIndex = notes.findIndex((note) => note.id === id)
    
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note list
const generateNoteDOM = (note) =>{
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    // Setup the link
    noteEl.setAttribute('href', `/notes-app/edit.html#${note.id}`)
    noteEl.classList.add('list-item')
    
    // Setup the status message
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl
/*
    const button = document.createElement('button')
    const updatedAtEL = document.createElement('span')


    // eventの中身は使わないので引数は不要
    button.addEventListener('click', ()=> {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes,filters)
    })

    // Setup the remove button
    // button.textContent = 'x'
    // noteEL.appendChild(button)

    // updatedAtEL.textContent = moment(note.updatedAt).fromNow()
    // noteEL.appendChild(updatedAtEL)

    // Setup the note title text

    textEL.textContent = note.title.length > 0 ? textEL.textContent = note.title : textEL.textContent ='Unnamed note'

    textEL.setAttribute('href',`/notes-app/edit.html#${note.id}`)
    noteEL.appendChild(textEL)
    
    return noteEL
*/
}

const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt>b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1                
            } else {
                return 0
            }
        })
    } else if(sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt>b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1                
            } else {
                return 0
            }
        })
    } else if(sortBy === 'alphabetical'){
        return notes.sort((a, b) => {
            if (a.title.toLowerCase()<b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1                
            } else {
                return 0
            }
        })
    }
}


// Render application notes
const renderNotes = (notes, filters) => {
    // 初めにquerySelectしておく
    const notesEl = document.querySelector('#notes')
    notes = sortNotes(notes,filters.sortBy)
    const filteredNotes = notes.filter((note)=> note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    // filteredNotesを作った後で初期化する。forEachの後ではない。
    notesEl.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEL = generateNoteDOM(note)
            notesEl.appendChild(noteEL)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        // JSで生成した要素に対するCSS付け
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }

    
}

const generateLastEdited = (timestamp) => (`Last edited ${moment(timestamp).fromNow()}`)