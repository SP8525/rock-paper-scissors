console.log("*** Rock, Paper, Scissors Game ***\n\n");
const buttons = document.querySelectorAll("button");
console.log(buttons);
let humanScore = 0;
let computerScore = 0;
let roundCount = 1;

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

function playRound(humanSelection, computerSelection) {                    
    if (humanSelection === computerSelection) {
        console.log("Push! - No winner");
        console.log("Human Score: " + humanScore + " || Computer Score: " + computerScore);
        console.log("Repeat round");
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors")  ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "rock")
    ) {
        console.log("You win! " + humanSelection + " beats " + computerSelection);
        humanScore ++;
        roundCount ++;
        console.log("Human Score: " + humanScore + " --- Computer Score: " + computerScore);
    } else {
        console.log("Computer wins! " + computerSelection + " beats " + humanSelection);
        computerScore ++;
        roundCount ++;
        console.log("Human Score: " + humanScore + " --- Computer Score: " + computerScore);
    }
}
    
function playGame() {
    console.log("Click any button to start the first round.");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (roundCount > 5) return;
            
            console.log("Round: " + roundCount);
            const humanSelection = button.id;
            console.log("Human Choice:", humanSelection);
            
            const computerSelection = getComputerChoice();

            playRound(humanSelection, computerSelection);

            if (roundCount > 5) {
                console.log(
                    humanScore > computerScore
                      ? "You win the game!"
                      : "Computer wins."
                  );                  
            }
        })
    });

}

playGame();