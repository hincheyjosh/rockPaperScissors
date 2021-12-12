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

function startGame (e) {
    let startView = document.querySelector(".start-view")
    let gameView = document.querySelector(".game-view")
    let endView = document.querySelector(".game-over-view")
    startView.style.display = "none"
    gameView.style.display = "flex"
    endView.style.display = "none"
    game()
}

function checkWinner() {
    if (playerScore === 5 || compScore === 5) {
        return true
    }
    return false
}

function gameOver() {
    let gameView = document.querySelector(".game-view")
    let endgame = document.querySelector(".game-over-view")
    gameView.style.display = "none"
    endgame.style.display = "flex"
}

function playAgain() {
    window.location.reload();
}

function game() {
    let playerScore = 0
    let compScore = 0
    let draws = 0
    let rounds = 1
    const rockBtn = document.querySelector("#rock")
    const paperBtn = document.querySelector("#paper")
    const scissorsBtn = document.querySelector("#scissors")
    const compScoreBoard = document.querySelector("#comp-score")
    const playerScoreBoard = document.querySelector("#player-score")
    const drawScoreBoard = document.querySelector("#draws-score")
    const roundHeader = document.querySelector(".round")
    const alert = document.querySelector(".alert")
    playOptions = [rockBtn, paperBtn, scissorsBtn]
    playOptions.forEach(option => {
        option.addEventListener('click', function() {
            winner = calcWinner(this.id)
            if (winner === 'computer') {
                compScore++
                rounds++
                compScoreBoard.textContent = compScore
            } else if (winner === 'player') {
                playerScore++
                playerScoreBoard.textContent = playerScore
                rounds++
            } else {
                draws++
                rounds++
                drawScoreBoard.textContent = draws
            }
            roundHeader.textContent = `Round ${rounds}`
            if (rounds === 5 ) {
                if (playerScore > compScore) {
                    alert.textContent = "You won!"
                } else if (compScore > playerScore) {
                    alert.textContent = "The computer won!"
                } else {
                    alert.textContent = "Tie!"
                }
                gameOver()
            }
        })
    })
}

document.querySelector(".start-btn").addEventListener('click', startGame)