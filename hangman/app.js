// Primitive value: string,number,boolean,null,undefined
// Object: myObject --> Object.prototypr --> null
// Array; myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null






// よくあるobjectの宣言だが、裏側では、classとinstanceと同じような検索がされている
// const product = {
//     name: 'Influence'
// }
// Object.prototype, hasOwnProperty = () => 'This is the new function.'
// hasOwnProperty return true or false
// console.log(product.hasOwnProperty('name'))

const product = 'Computer'
// これだとpropertyを持たない
console.log(product)

const otherProduct = new String('Phone')
// これだとpropertyを持つようにwrapされている
console.log(otherProduct)