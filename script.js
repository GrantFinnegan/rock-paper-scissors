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

//Declare and initialize variables to track the scores of the human and the computer
let humanScore = 0;
let computerScore = 0;