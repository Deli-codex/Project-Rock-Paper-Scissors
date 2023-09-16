function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
	const randomArray = arr[randomIndex]
  return randomArray;
}
const array = ["rock", "paper", "scissors"];
function playRound(playerSelection, computerSelection) {
		//converts the case type to lower case
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()
  
  if (playerSelection == "rock" && computerSelection == "scissors" ||
  		playerSelection == "scissors" && computerSelection == "paper"||
      playerSelection == "paper" && computerSelection == "rock") {
     console.log(`you win! ${playerSelection} beats ${computerSelection}`) 
      }
  else {
  	console.log(`you loose! ${computerSelection} beats ${playerSelection}`)
  }
}
const PlayerSelection = "rock"
const ComputerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));