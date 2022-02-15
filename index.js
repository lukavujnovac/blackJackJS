let firstCard = 10
let secondCard = 8
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true
let message = ""

let messageEL = document.getElementById("message-el")
let sumEL = document.querySelector("#sum-el")

function startGame() {
    if (sum <= 20) {
        message = "do you want to draw another card?"
    } else if (sum === 21) {
        message = "You won"
        hasBlackJack = true
    } else {
        message = "You lost"
        isAlive = false
    }
    messageEL.textContent = message
    sumEL.textContent = "sum: " + sum
}

