// Promise
const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})

const getCountry = (countryCode) => {
    return fetch('https://restcountries.com/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        const country = data.find((country) => country.alpha2Code === countryCode)
        return country
    })
}

// Challenge
const getLocation = (token) => {
    return fetch(`https://ipinfo.io/json?token=${token}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        return {
            city: data.city,
            region: data.region,
            country: data.country
        }
    })
}

/* XMLHttpRequestを使う方法
const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            resolve(country)
        } else if (e.target.readyState === 4) {
            // 操作は完了したが、リクエストが成功していない場合
            reject('Unable to fetch data')
        }
    })

    countryRequest.open('GET', 'https://restcountries.com/v2/all')
    countryRequest.send()
})
*/

/* callbackを使う方法
const getPuzzle = (wordCount, callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined,data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place',undefined)
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}


const getCountry = (countryCode,callback) => {
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            // 引数の関数callback（任意の名前で可。可読性が大事）はここで使われる
            callback(undefined, country)
        } else if (e.target.readyState === 4) {
            // 操作は完了したが、リクエストが成功していない場合
            callback('Unable to fetch data',undefined)
        }
    })

    countryRequest.open('GET', 'https://restcountries.com/v2/all')
    countryRequest.send()
}
*/