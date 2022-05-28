const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
// createCounterの変数countには、returnの関数を通じてしかアクセスできない
counter.count = 0 //変数countにアクセスできておらず、returnにcount:0を加えただけ
console.log(counter.get())

// Add
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
// add10とadd100は、同じ関数本体の定義を共有しているが、保有している環境は異なる（当然、結果も異なる）
const add100 = createAdder(100)
console.log(add100(-90))
// const add = (a, b) => a + b 関数の使い回しを広げにくい

// Challenge 'Tipper'
const createTipper = (baseTip) => {
    return (amount) => {
        return amount*baseTip
    }
}

const Tipper10 = createTipper(.15)
console.log(Tipper10(10000))
const Tipper30 = createTipper(.3)
console.log(Tipper30(10000))