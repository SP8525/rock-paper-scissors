console.log("*** Rock, Paper, Scissors Game ***\n\n");
const buttons = document.querySelectorAll("button");
console.log(buttons);
let humanScore = 0;
let computerScore = 0;
let roundCount = 1;

const container = document.createElement("div");
container.style.cssText = "background: lightblue; border: 2px solid black;";
document.body.appendChild(container);


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
        console.log("Human Score: " + humanScore + " --- Computer Score: " + computerScore);
        console.log("Repeat round");
        
        const winner = document.createElement("h4");
        winner.textContent = ("Push! - No Winner \n Human Score: " + humanScore + " --- Computer Score: " + computerScore + "\n Repeat Round");
        container.appendChild(winner);
        winner.style.whiteSpace = "pre-line";
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors")  ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "rock")
    ) {
        console.log("You win! " + humanSelection + " beats " + computerSelection);
        humanScore ++;
        roundCount ++;
        console.log("Human Score: " + humanScore + " --- Computer Score: " + computerScore);

        const winner = document.createElement("h4");
        winner.textContent = ("You win! " + humanSelection + " beats " + computerSelection + ".\n Human Score: " + humanScore + " --- Computer Score: " + computerScore);
        container.appendChild(winner);
        winner.style.whiteSpace = "pre-line";
    } else {
        console.log("Computer wins! " + computerSelection + " beats " + humanSelection);
        computerScore ++;
        roundCount ++;
        console.log("Human Score: " + humanScore + " --- Computer Score: " + computerScore);
        
        const winner = document.createElement("h4");
        winner.textContent = ("Computer wins! " + computerSelection + " beats " + humanSelection + ".\n Human Score: " + humanScore + " --- Computer Score: " + computerScore);
        container.appendChild(winner);
        winner.style.whiteSpace = "pre-line";
    }
}

function playGame() {
    const begin = document.createElement("h2");
    begin.textContent = "Click any button to start the first round";
    container.appendChild(begin);

    // console.log("Click any button to start the first round.");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (roundCount > 5) return;
            
            console.log("Round: " + roundCount);
            const round = document.createElement("h3");
            round.textContent = ("Round: " + roundCount);
            container.appendChild(round);
            
            const humanSelection = button.id;
            console.log("Human Choice:", humanSelection);
            const humanSelectionPrint = document.createElement("h3");
            humanSelectionPrint.textContent = ("Human Choice: " + humanSelection);
            container.appendChild(humanSelectionPrint);

            const computerSelection = getComputerChoice();
            const computerSelectionPrint = document.createElement("h3");
            computerSelectionPrint.textContent = ("Computer Choice: " + computerSelection);
            container.appendChild(computerSelectionPrint);

            playRound(humanSelection, computerSelection);

            if (roundCount > 5) {
                console.log(
                    humanScore > computerScore
                      ? "You win the game!"
                      : "Computer wins."
                );
                const endGameMessage = humanScore > computerScore
                    ? "You win the game!"
                    : "Computer wins."
                
                const endGameMessagePrint = document.createElement("h2");
                endGameMessagePrint.textContent = endGameMessage;
                container.appendChild(endGameMessagePrint);
            }
        })
    });
}

playGame();