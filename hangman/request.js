// async,awaitを使う方法
const getPuzzle = async(wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = response.json()
        return data.puzzle
    } else { 
        throw new Error('Unable to get puzzle')
    }
}

// fetchを使う方法
const getPuzzleOld = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to get puzzle')
        }
    })
}

// resolve,rejectを使う方法
const getPuzzleOldOld = (wordCount) => new Promise((resolve, reject) => {
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

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
    // return getCountry(location.country) より短い書き方
}

// async,awaitを使う方法
const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.com/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch data')
    }
}

const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=886be57f7a4c73')

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch data')
    }
}

// fetchを使う方法
/*
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

// fetchを使う方法
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
*/

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