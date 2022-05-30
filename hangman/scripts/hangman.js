class Hangman{
    constructor(word,remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.guessedLetters =[]
        this.remainingGuesses = remainingGuesses
        this.status = 'playing'
    }
    calculateStatus() {
        let finished = true

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
            } else {
                finished = false
            }
        })

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
            window.removeEventListener('keypress',window)
        } else if(finished){
            this.status = 'finished'
            window.removeEventListener('keypress',window)
        } else {
            this.status = 'playing'
        }
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter)|| letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.calculateStatus()
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return 'Great work! You guessed the word.'
        }
    }
}


/* 以下、古い書き方
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guessedLetters =[]
    this.remainingGuesses = remainingGuesses
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function () {
    // everyメソッドを使う方法,callbackが全ての要素に対してtrueを返した場合のみtrueを返す
    // const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    // 判断パラメータを作る。初期値をtrueにしておき、未回答が1文字でもあればfalseに反転する
    let finished = true

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
            // 解答している文字の時は何もしない。初期値tureのまま。
        } else {
            finished = false
        }
    })

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
        window.removeEventListener('keypress',window)
    } else if(finished){
        this.status = 'finished'
        window.removeEventListener('keypress',window)
    } else {
        this.status = 'playing'
    }
}

// 文字の変換について、配列の要素の変換+結合と考えたが、もっと単純に「文字に文字を足していく方法でよかった」
Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)|| letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    // 判定結果を変数に入れると、BadGuessの分岐が短く書ける
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    // undefinedを返すretuen,以下の処理は行われない
    if (this.status !== 'playing') {
        return
    }

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
    // メソッドの中で他のメソッドを呼び出すこともできる
    this.calculateStatus()
}

Hangman.prototype.getStatusMessage = function () {
    // statusで分岐
    if (this.status === 'playing') {
        return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
        return `Nice try! The word was "${this.word.join('')}".`
    } else {
        return 'Great work! You guessed the word.'
    }
}
*/