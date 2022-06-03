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
            this.guessedLetters = [...this.guessedLetters,guess]
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

export {Hangman as default}