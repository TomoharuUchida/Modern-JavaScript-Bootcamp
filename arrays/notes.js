// const notes = ['Note 1', 'Note 2', 'Note 3'];
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

// 合致するものを取り出すならfind、合致するものを削除するならfindIndexを使う

// titleを渡すと配列から合致するtitle,bodyを返すfunctionを作る
// 合致する要素のindexを返す->indexから要素を取り出して返す
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (notes,index) {
//         return notes.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// 形式的に使われるa,bについて、正しい順序のapple<beeなら-1を返すようにする（並び替えなし）、bee<appleなら1を返すようにする（並び替え）
// objectは関数で処理しないとsortできない
const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
            return -1
        } else if (a.title.toLocaleLowerCase()>b.title.toLocaleLowerCase() ) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)


const findNote = function (notes, noteTitle) {
    return notes.find(function (notes,index) {
        return notes.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

// functionに値を渡して、結果を代入する変数を定義する
const note = findNote(notes, 'Office modification')
// console.log(note)

// fileterは、retuenを trueで固定すれば、新しい配列に全て入るし、falseにすれば全て弾かれる
// 'ne'というハードコーディングからqueryという引数に一般化、fileter関数のreturnも変数filteredNotesに格納すればわかりやすいが、不要なので直return
const findNotes = function (notes,query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLocaleLowerCase().includes(query)
        const isBodyMatch = note.body.toLocaleLowerCase().includes(query)
        // falseとfalseの場合は、弾かれる
        return isTitleMatch || isBodyMatch
    })
}


// console.log(findNotes(notes,'ne'))





// 返り値は,取り除いた配列の最後の要素
// console.log(notes.pop())

// notes.push('My new note')

// 返り値は,取り除いた配列の最初の要素
// console.log(notes.shift())

// notes.unshift('My first note')

// index1から1つ要素が消える
// notes.splice(1,1)

// 第2引数を0にして要素を追加する。第2引数を1にして要素の変更
// notes.splice(1,1,'This is the new second item')

// indexを指定して書き換えることも可能
// notes[2] = 'This is now the new note3'

// forEachの引数は1つ、引数のfunctionは、引数を複数持つ。第2引数はindex番号
// const doThis = function...のように外で定義することもできる
// callback function 関数の引数に関数を渡す

// notes.forEach(function (item,index) {
//     console.log(index)
//     console.log(item)  
// })

// 対象が配列で、前から順に処理するならforEach,対象が配列ではなく、前から処理ではないならforがいい
// for statementは、後->前の順で処理することもできる。forEachより柔軟性がある。
// for (let count = notes.length-1; count >= 0; count--){
//     console.log(notes[count])
// }

// console.log(notes)

// const index =notes.findIndex(function (note,index) {
//     console.log(note)
//     // booleanが返るようにする
//     return note.title === 'Habbits to work on'
// })

// console.log(index)

// console.log(notes.length)
// console.log(notes[0])
// console.log(notes[notes.length - 1])

// indexOfは、配列では使えるが、オブジェクトでは使えない
// console.log(notes.indexOf('Note 2'))

// console.log({}==={}) なんと、これはfalseが返る
// objectを比較する時、どんなpropertyやvalueを持つかは問題ではない
// if they are in the exact same memory

// 同じオブジェクトへの参照を比較した時のみ真となります
// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject)