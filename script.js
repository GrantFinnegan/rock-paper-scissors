//Make a choice for computer and return it
function getComputerChoice(){
    //Random generate integer 0-2
    switch(Math.floor(Math.random() * 3)){
        //CASE 0: return "rock"
        case 0:
            return "rock";
        //CASE 1: return "paper"
        case 1:
            return "paper";
        //CASE 2: return "scissors"
        case 2:
            return "scissors";
    }
}

//Prompt for and return human choice
function getHumanChoice(){
    //Prompt with message "Please enter your move (rock, paper, or scissors)"
    //convert to lowercase
    //store answer
    let playerInput = prompt("Please enter your move (rock, paper, or scissors)").toLowerCase();
    switch(playerInput){
        //CASE "rock": return "rock"
        case "rock":
            return "rock";
        //CASE "paper": return "paper"
        case "paper":
            return "paper"
        //CASE "scissors": return "scissors"
        case "scissors":
            return "scissors"
        //ELSE: return undefined
        default:
            return undefined;
    }
}


//compare humanChoice and computerChoice
//Log results to console.
//increment the score of the winner, if there is one
//unrecognizable inputs count as an automatic loss
function playRound(humanChoice, computerChoice){
    //IF humanChoice is undefined, log message saying so
    if (!humanChoice) {
        console.log("You lose! The move you entered was not recognized, and is considered a forfeit");
    }
    //check for a draw
    //ELSE IF human and cumputerChoice are the same
    else if (humanChoice == computerChoice) {
        //log a tie message and leave scores unchanged
        console.log(`It's a draw! You played ${humanChoice} and the computer played ${computerChoice}`);
    }
    //Check if the player won
    //IF humanChoice == "rock" AND computerChoice == "scissors"
    //OR
    //IF humanChoice == "paper" AND computerChoice == "rock"
    //OF
    //IF humanChoice == "scissors" AND computerChoise == "paper"
    else if (
        humanChoice == "rock" && computerChoice == "scissors"
        ||
        humanChoice == "paper" && computerChoice == "rock"
        ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        //log winning message
        console.log(`You win! You played ${humanChoice} and the computer played ${computerChoice}`);
    }
    //if no draw or win was detected
    else {
        console.log(`You lose! You played ${humanChoice} and the computer played ${computerChoice}`);
    }
}


const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => playRound("scissors",getComputerChoice()))