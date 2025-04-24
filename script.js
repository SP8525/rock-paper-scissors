console.log("*** Rock, Paper, Scissors Game ***\n\n");

function getComputerChoice () {
    let computerChoice = "";
    // Returns a random integer from 1 to 3 (inclusive):
    compChoiceNum = Math.floor(Math.random() * 3) + 1;
    
    if (compChoiceNum === 1) {
        computerChoice = "rock";
    } else if (compChoiceNum === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("Computer Choice: " + computerChoice);
    return (computerChoice);
}

function getHumanChoice () {
    let humanChoice = prompt("Enter 'rock,' 'paper,' or 'scissors.'");
    console.log("Human Choice: " + humanChoice);
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanSelection, computerSelection) {                    
        if (humanSelection === computerSelection) {
            console.log("Push! - No winner");
            console.log("Human Score: " + humanScore + " || Computer Score: " + computerScore);
            roundCount--;
        } else if ((humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "scissors" && computerSelection === "paper") || (humanSelection === "paper" && computerSelection === "rock")) {
            console.log("You win! " + humanSelection + " beats " + computerSelection);
            humanScore ++;
            console.log("Human Score: " + humanScore + " || Computer Score: " + computerScore);
        } else {
            console.log("Computer wins! " + computerSelection + " beats " + humanSelection);
            computerScore ++;
            console.log("Human Score: " + humanScore + " || Computer Score: " + computerScore);
        }
        return(roundCount);
    }

    for (let roundCount = 1; roundCount <= 5; roundCount++) {
        console.log("Round " + roundCount);
        let humanSelection = getHumanChoice();
        humanSelection = humanSelection.toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }


    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("Computer wins.")
    } 
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

playGame();