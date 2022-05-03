// Variable Shadowing
// スコープが別なら再度宣言することができる。参照するときは一番近いところから参照される。
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