const hands = ['rock', 'paper', 'scissors']


function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function computerPlay() {
    let pick =  hands[getRandomInt(3)]
    return pick
}

function playerInput() {
    let input = prompt("Please choose Rock, Paper, or Scissors.").toLowerCase()

    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return input
    } else {
        return playerInput()
    }
}

function calcWinner(computerHand, playerHand) {
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
    alert(`The computer picked ${computerHand} and you picked ${playerHand}.  ${winner === 'tie' ? 
        'The round ended in a tie!' : winner === 'computer' ? 'The computer won this round!' : 
        'You won this round.'}`)
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