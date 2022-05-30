let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited',
}


// const userJSON = JSON.stringify(user)
// localStorage.setItem('user', userJSON)

// JSONは,オブジェクトっぽいけど、単なる文字列なので、そのままJSでは扱えない。
// const userJSONData = localStorage.getItem('user')
// const userData = JSON.parse(userJSONData)
// console.log(`${user.name} is ${user.age}.`)

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e)=> {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id:id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp,
    })
    saveNotes(notes)
    location.assign(`/notes-app/edit.html#${id}`)
})

// 引数はeventのeとすることが多い。eをconsole.logするとたくさんの内容があることがわかる。


// document.querySelector('#remove-all').addEventListener('click',function () {
//     // classは複数なのでAll
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove()
//     })
// })

// eventはclickだとテキストエリアの外をクリックしないと発火しないので、inputを使う
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    // inputイベントのたびに呼び出す
    renderNotes(notes,filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes,filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// const birthday = moment()
// momentのドキュメントでset,display,formatを確認する
// birthday.year(1986).month(6).date(11)
// console.log(birthday.format('MMM D YYYY'))


// const now = moment()
// now.add(1, 'week').subtract(20, 'days')
// // April 21st,2023
// いろんなフォーマットを提供している
// console.log(now.format('MMMM Do,YYYY'))

// // Time from now
// 2 weeks agoとかの更新履歴の表示に使う
// console.log(now.fromNow())

// 現在のタイムスタンプを簡単に出力できる
// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())

// 1分に指定する
// now.minute(1)
// 分の数字だけ出力する
// console.log(now.minute())



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