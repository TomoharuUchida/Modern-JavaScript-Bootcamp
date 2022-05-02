let isAccountLocked = false
let userRole = "admin"

if (isAccountLocked) {
    console.log("Is account locked")
} else if (userRole === "admin") {
    console.log("Welcome admin")
 } else {
    console.log("Welcome!")
}

// Challenge areas
let temp = 32

if (temp <= 32) {
    console.log("It is Freezing outside!")
} else if (temp >= 110) {
    console.log("It is hot outside!")
} else {
    console.log("Go for it.It is pretty nice out.")
}