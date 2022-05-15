// Read existing notes from localStorage
const getSavedNotes = function () {
    // Check for existing data
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

const saveNotes = function (notes) {
    localStorage.setItem('notes',JSON.stringify(notes))
}

// Remove the note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note list
const generateNoteDOM = function (note) {
    const noteEL = document.createElement('div')
    const textEL = document.createElement('a')
    const button = document.createElement('button')
    const updatedAtEL = document.createElement('span')


    // eventの中身は使わないので引数は不要
    button.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes,filters)
    })

    // Setup the remove button
    button.textContent = 'x'
    noteEL.appendChild(button)

    updatedAtEL.textContent = moment(note.updatedAt).fromNow()
    noteEL.appendChild(updatedAtEL)

    // Setup the note title text
    if (note.title.length > 0) {
        textEL.textContent = note.title
    } else {
        textEL.textContent ='Unnamed note'
    }
    textEL.setAttribute('href',`/notes-app/edit.html#${note.id}`)
    noteEL.appendChild(textEL)
    
    return noteEL
}

const sortNotes = function (notes, sortBy) {
    if (sortBy === 'byEdited') {
        return notes.sort(function (a, b) {
            if (a.updatedAt>b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1                
            } else {
                return 0
            }
        })
    } else if(sortBy === 'byCreated') {
        return notes.sort(function (a, b) {
            if (a.createdAt>b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1                
            } else {
                return 0
            }
        })
    } else if(sortBy === 'alphabetical'){
        return notes.sort(function (a, b) {
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
const renderNotes = function (notes, filters) {
    notes = sortNotes(notes,filters.sortBy)
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // filteredNotesを作った後で初期化する。forEachの後ではない。
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEL = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEL)
    })
}

const generateLastEdited = function (timestamp) {
    return `Last edited ${moment(timestamp).fromNow()}`
}