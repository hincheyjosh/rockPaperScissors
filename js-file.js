const hands = ['rock', 'paper', 'scissors']


function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function computerPlay() {
    let pick =  hands[getRandomInt(3)]
    return pick
}

function calcWinner(playerHand) {
    let computerHand = computerPlay()
    let winner = null
    if (computerHand === playerHand) {
        winner =  'tie'
    } else if (computerHand === 'rock') {
        if (playerHand === 'paper') {
            winner = 'player'
        } else {
            winner = 'computer'
        }
    } else if (computerHand === 'paper') {
        if (playerHand === 'scissors') {
            winner = 'player'
        } else {
            winner = 'computer'
        }
    } else if (computerHand === 'scissors') {
        if (playerHand === 'rock') {
            winner = 'player'
        } else {
            winner = 'computer'
        }
    }
    return winner
}

function playGame() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let winner = calcWinner(computerPlay(), playerInput())
        if (winner === 'tie') {
            continue
        } else if (winner === 'player') {
            playerScore++
        } else {
            computerScore++
        }
    }
    return playerScore === computerScore ? alert('Tie'): playerScore > computerScore ?
            alert('You Win!'): alert("Computer wins!");
}

function switchView (e) {
    let startView = document.querySelector(".start-view")
    let gameView = document.querySelector(".game-view")
    startView.style.display = "none"
    gameView.style.display = "flex"
}

function playRound(id) {
    console.log(id)
    let winner = calcWinner(id)
    let alert = document.querySelector(".alert")
    alert.innerHTML = winner
}

document.querySelector(".start-btn").addEventListener('click', switchView)

const images = document.querySelectorAll("img")

images.forEach(image => {
    image.addEventListener("click", () => {
        playRound(image.id)
    })
})
