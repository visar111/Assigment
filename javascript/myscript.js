let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let allChoices = ["Rock", "Paper", "Scissors"];
    let randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
    return randomChoice
}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = prompt("Would you like to choose Rock, Paper or Scissors?")
        const computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection));
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie game!"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}!`
        
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}!`
        
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}!`

    } else {
        computerScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function winGame() {
    if (playerScore == 5) {
        return "You win!"
    } else if (computerScore == 5) {
        return "You lose!"
    }
}

game();

console.log("Player score ", `${playerScore}`);
console.log("Computer score ", `${computerScore}`);