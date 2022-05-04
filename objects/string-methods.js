let name = '  Andrew Mead '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())
console.log(name)

// Challenge area

// methodの頭に!をつけてbooleanを反転させる。返り値がbooleanなので、ifで条件分岐せずに一行で書ける
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123&#$%!@#$%^&*'))
console.log(isValidPassword('asdfppoipassword'))