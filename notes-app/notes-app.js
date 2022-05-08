const notes = [{
    title:'My next trip',
    body:'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body:'Exercise. Eating a bit better.'
},{
    title: 'Office modification',
    body:'Get a new seat'
    }]

const filters = {
    searchText:''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // filteredNotesを作った後で初期化する。forEachの後ではない。
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEL = document.createElement('p')
        noteEL.textContent = note.title
        document.querySelector('#notes').appendChild(noteEL)
    })

}

renderNotes(notes, filters)

// 引数はeventのeとすることが多い。eをconsole.logするとたくさんの内容があることがわかる。
// document.querySelector('#create-note').addEventListener('click', function (e) {
//     e.target.textContent = 'button was clicked';
// })

// document.querySelector('#remove-all').addEventListener('click',function () {
//     // classは複数なのでAll
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove()
//     })
// })

// eventはclickだとテキストエリアの外をクリックしないと発火しないので、inputを使う
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    // inputイベントのたびに呼び出す
    renderNotes(notes,filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

/*
document.querySelector('#name-form').addEventListener('submit', function (e) {
    // formがとるeventはsubmitのみ。通常動作ではsubmitするとページ全体がリフレッシュされる。
    // これをpreventして、必要な処理だけ行う
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})
*/


// const p = document.querySelector('p')
// console.log(p)
// p.remove()

// Query all and remove
/*const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
    p.textContent = '*******'
    // console.log(p.textContent)
    // p.remove()
})*/

// Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)