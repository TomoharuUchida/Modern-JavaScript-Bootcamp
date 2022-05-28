// Callback
/*const getDateCallback = (callback) => {
    setTimeout(() => {
        callback('This is my callback error', undefined);
        callback('This is my callback error', undefined);
    },3000)
}

getDateCallback((err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})*/

// Callback Hell -> promise chainingを使う
/*const getDateCallback = (num,callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined,num * 2)
        } else {
            callback('Number must be provided')
        }
    },3000)
}
// ネストが深すぎる
getDateCallback(2,(err, data) => {
    if (err) {
        console.log(err)
    } else {
        getDateCallback(data, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
    }
})*/


// promise chaining
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    },2000)
})

// 繰り返す場合など、複雑な非同期処理をシンプルに書ける.エラーハンドリングは1回だけでよい
getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})


// 第1,2引数で繰り返し渡す方法 -> 読みにくい
/*getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})
*/

// Promise resolve,rejectを渡す呼び出し方
/*
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is the promise data')
        reject('This is my callback error', undefined);
        reject('This is my callback error', undefined);
    },3000)
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})

myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})
*/