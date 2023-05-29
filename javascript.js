function getComputerChoice() {

    let i = Math.floor(Math.random() * 3);
    let compChoice = "paper";

    if (i == 0) {
        compChoice = "rock";
    } else if (i == 1) {
        compChoice = "scissor";
    }

    return compChoice;
}

function playerSelection() {
    var playerInput = prompt("Let's play! Rock, paper, or scissors?");
    playerInput = playerInput.toUpperCase(); 
    return playerInput;
}



console.log(playerSelection());