let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0,
}

let otherAccount = myAccount
// 参照元のmyAccountのincomeも1000に上書きされる
// otherAccount.income = 1000

// グローバルでは、propertiesを指定なくても、空の{}で上書きできる
otherAccount = {}

let addExpenses = function (account, amount) {
    // 関数の処理では、propertiesを指定しないと、参照元は上書きされない
    // account = 1
    // account = {}
    account.expenses = account.expenses + amount;
}

// Challenge area

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses=0
}

let getAccountSummary = function (account) {
    // 命名して、処理の意味を明示しつつ、テンプレートの見通しをよくする
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
    
    // return `Account for ${account.name} has $${account.income-account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpenses(myAccount, 100)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))


