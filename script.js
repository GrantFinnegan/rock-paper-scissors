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


function playGame() {
    //Declare and initialize variables to track the scores of the human and the computer
    let humanScore = 0;
    let computerScore = 0;


    //compare humanChoice and computerChoice
    //Log results to console.
    //increment the score of the winner, if there is one
    function playRound(humanChoice, computerChoice){
        //IF humanChoice is undefined, log message saying so and leave scores unchanged
        if (!humanChoice) {
            console.log("The move you entered was not recognized, please try again");
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
            //increment humanScore
            humanScore++;
            //log winning message
            console.log(`You win! You played ${humanChoice} and the computer played ${computerChoice}`);
        }
        //if no draw or win was detected
        else {
            computerScore++;
            console.log(`You lose! You played ${humanChoice} and the computer played ${computerChoice}`);
        }
    }

    //FOR 5 rounds
    for (let round = 1; round <= 5; round++) {
        //prompt human for choice, generate computer choice, pass both to playRound
        playRound(getHumanChoice(), getComputerChoice());
        //if not final round, log round and score to console
        if (round <5 ) {
            console.log(`Round:${round} | Human Score:${humanScore} | Computer Score:${computerScore}`);
        }
    }
    //log final results
    console.log(`After 5 rounds you have won ${humanScore} time(s) and the computer has won ${computerScore} time(s)`);

}

//run the game
playGame();