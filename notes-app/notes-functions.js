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
    const noteEL = document.createElement('div')
    const textEL = document.createElement('a')
    const button = document.createElement('button')
    const updatedAtEL = document.createElement('span')


    // eventの中身は使わないので引数は不要
    button.addEventListener('click', ()=> {
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

    textEL.textContent = note.title.length > 0 ? textEL.textContent = note.title : textEL.textContent ='Unnamed note'

    textEL.setAttribute('href',`/notes-app/edit.html#${note.id}`)
    noteEL.appendChild(textEL)
    
    return noteEL
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
    notes = sortNotes(notes,filters.sortBy)
    const filteredNotes = notes.filter((note)=> note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    // filteredNotesを作った後で初期化する。forEachの後ではない。
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note) => {
        const noteEL = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEL)
    })
}

const generateLastEdited = (timestamp) => (`Last edited ${moment(timestamp).fromNow()}`)