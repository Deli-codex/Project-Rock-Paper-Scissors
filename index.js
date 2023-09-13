function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomArr = arr[randomIndex];
  return randomArr;
}

const array = ["rock", "paper", "scissors"];

/**checking for the winner */
function checkWinner(playerSelection, computerSelection){
  /* Making the parameters case insensitive */
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
 
  if (computerSelection == playerSelection){
    return "tie";
  }else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    return "computer";
} else {
  return "player";
}
}
function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  /* Declaring the conditionals for the winner */
  if (result == 'player') {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (result == 'computer') {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    console.log('its a tie');
  }
}

/* Taking user input */
function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput === false) {
    choice = prompt('rock paper scissors');
    if (choice === null) {
      continue;
    }
    choice = choice.toLowerCase();

    if (array.includes(choice)) {
      validatedInput = true;
      //console.l(og(choice);
    }
  }
 return choice; // Return the user's choice
}


//getPlayerChoice();

function game() {
  for (let i = 0; i < 5; i++) {

  let  playerScore = 0;
  let  computerScore = 0;
  
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice(array);
    console.log(playRound(playerSelection, computerSelection));

    if (checkWinner(playerSelection, computerSelection) == 'player'){
      playerScore++;
    }else if (checkWinner(playerSelection, computerSelection)== 'computer'){
      computerScore++;
    } 
    console.log('----------------');
  
  }
 
  console.log('Game-Over');
  if(playerScore > computerScore){
    console.log('you win!!');
  } else if (playerScore < computerScore){
    console.log("you loose!!, computer wins ! try again");
  }else {
    console.log("its a tie")
  }
}

game();
