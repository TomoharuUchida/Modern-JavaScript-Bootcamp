const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)

const dateOne = new Date('July 11,1986')
const dateTwo = new Date('August 1,1986')
const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

if (dateOneTimestamp < dateTwoTimestamp) {
    console.log(dateOne.toString())
} else if(dateTwoTimestamp<dateOneTimestamp){
    console.log(dateTwo.toString())
}

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)