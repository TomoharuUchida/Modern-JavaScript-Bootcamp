const products = []
const product = products[0]

// Truthy - Values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy Values - false,0,empty string '',null,undefined,[],{},NaN
// 真値truthy は論理値のコンテキストに現れたときにtrueとみなされる値のこと

if (product !== undefined) {
    console.log('Product found')
} else {
    console.log('No products found')
}