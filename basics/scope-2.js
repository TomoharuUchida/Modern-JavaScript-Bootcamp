// Variable Shadowing

// avoid leaked Global

// let name = "Andrew"

if (true) {
    // let name = "Mike"

    if (true) {
        // letを使って宣言しないと、意図せずにglobal変数を作ってしまうことになる
        // name = "Jen"
        let name = "Jen"
        console.log(name)
    }    
}

if (true) {
    console.log(name)
}