// Prototypal Inheritance

class Person {
    constructor(firstName, lastName, age, likes=[]) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    set fullName(fullname) {
        const names = fullname.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person{
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    // サブクラスのメソッドのオーバーライド
    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }
    // サブクラスに新たなメソッドの追加
    getYearLeft() {
        return 65- this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes,grade) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(change) {
        this.grade += change
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
}

const me = new Student('Tomoharu', 'Uchida', 35, 'Driver', 88)
me.fullName = 'Clancey Turner'


console.log(me.getBio())

// ------------------ 以下、古い書き方--------------------
/*
Person.prototype.getBio = function () {
    // 再代入していくので、constは使えない
    let bio = `${this.firstName} is ${this.age}.`

    // ここで通常のfunctionを使うとfirstNameがundefinded になる
    // インスタンスのプロパティにアクセスできるようにしている
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking'])

// meのgetBioだけ上書きされる。person2には影響しない。
// me.getBio = function () {
//     return 'This is fake!'
// }

me.setName('Alexis Turner')
// console.log(me.getBio())

const person2 = new Person('Tomoharu', 'Uchida', 35)
// console.log(person2)
*/