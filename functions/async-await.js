const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    },2000)
})
// awaitを使うことで、promise chainingが書きやすくなる
const processData = async () => {
    let data = await getDataPromise('abc')
    data = await getDataPromise((data))
    return data
}

processData().then((data) => {
    console.log('Data',data)
}).catch((err) => {
    console.log('Error', err)
})