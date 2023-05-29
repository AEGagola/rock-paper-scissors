function getComputerChoice() {

    let i = Math.floor(Math.random() * 3);
    let compChoice = "PAPER";

    if (i == 0) {
        compChoice = "ROCK";
    } else if (i == 1) {
        compChoice = "SCISSORS";
    }

    return compChoice;
}

function playerSelection() {
    var playerInput = prompt("Let's play! Rock, paper, or scissors?");
    playerInput = playerInput.toUpperCase();
    return playerInput;
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        console.log("Tie!");
    } else if ((playerSelection == "ROCK") && (computerSelection == "SCISSORS")) {
        console.log("You win! Rock SMASHES scissors!");
    } else if ((playerSelection == "ROCK") && (computerSelection == "PAPER")) {
        console.log("You lose! Paper COVERS rock!");
    } else if ((playerSelection == "PAPER") && (computerSelection == "ROCK")) {
        console.log("You win! Paper COVERS rock!");
    } else if ((playerSelection == "PAPER") && (computerSelection == "SCISSORS")) {
        console.log("You lose! Scissors CUTS paper!");
    } else if ((playerSelection == "SCISSORS") && (computerSelection == "PAPER")) {
        console.log("You win! Scissors CUTS paper!");
    } else if ((playerSelection == "SCISSORS") && (computerSelection == "ROCK")) {
        console.log("You lose! Rock SMASHES scissors!");
    }
}

function game(){
    let i = 0;

    while (i < 5){
        const compChoice = getComputerChoice();
        const playerChoice = playerSelection();
        playRound(playerChoice,compChoice);
        console.log("Player Choice: " + playerChoice);
        console.log("CPU Choice: " + compChoice);
        i++;
    }
}

game();
