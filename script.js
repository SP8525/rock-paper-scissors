console.log("*** Rock, Paper, Scissors Game ***\n\n");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let compChoiceString = "";
    // Returns a random integer from 1 to 3 (inclusive):
    compChoiceNum = Math.floor(Math.random() * 3) + 1;
    
    if (compChoiceNum === 1) {
        compChoiceString = "rock";
    } else if (compChoiceNum === 2) {
        compChoiceString = "paper";
    } else {
        compChoiceString = "scissors";
    }
        console.log("Computer Choice: " + compChoiceString);
    return (compChoiceString);
}

function getHumanChoice () {
    let humanChoice = prompt("Enter 'rock,' 'paper,' or 'scissors.'");
    console.log("Human Choice: " + humanChoice);
    return humanChoice;
}
//function playGame();
    //roundCounter = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    

    if (humanChoice === computerChoice) {
        console.log("Push! - No winner");
        console.log("Human Score: " + humanScore + " || Computer Score: " + computerScore);
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore ++;
        //roundCounter ++;
        console.log("Human Score: " + humanScore + " || Computer Score: " + computerScore);
    } else {
        console.log("Computer wins! " + computerChoice + " beats " + humanChoice);
        computerScore ++;
        //roundCounter ++;
        console.log("Human Score: " + humanScore + " || Computer Score: " + computerScore);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
  
playRound(humanSelection, computerSelection);

