console.log("Hello World");
/*
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
*/

function getHumanChoice () {
    let humanChoice = prompt("Enter 'rock,' 'paper,' or 'scissors.'");
    console.log(humanChoice);
    return humanChoice;
}

//getComputerChoice();
getHumanChoice();

/*
function playRound(humanChoice, computerChoice) {
    // your code here!
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
*/