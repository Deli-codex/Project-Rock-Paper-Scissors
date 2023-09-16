const array = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const challenge = document.querySelector('.displayChallenge');
const playerScoreDisplay = document.querySelector('.playerScore');
const computerScoreDisplay = document.querySelector('.computerScore');
const resultDisplay = document.querySelector('.result');

document.querySelector('.rock').addEventListener('click', () => {
  startGame('rock');
});

document.querySelector('.paper').addEventListener('click', () => {
  startGame('paper');
});

document.querySelector('.scissors').addEventListener('click', () => {
  startGame('scissors');
});

function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function endGame() {
  if (playerScore > computerScore) {
    return 'Player Wins';
  } else if (playerScore < computerScore) {
    return 'Computer Wins';
  } else {
    return "It's a tie";
  }
}



function startGame(playerSelection) {
  const computerSelection = getComputerChoice(array);
  const roundResult = playRound(playerSelection, computerSelection);
  const result = checkWinner(playerSelection, computerSelection);

  console.log(roundResult);

  if (result === "Player") {
    playerScore++;
  } else if (result === "Computer") {
    computerScore++;
  }

  playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
  resultDisplay.textContent = result;

  if (playerScore === 5 || computerScore === 5) {
    const finalResult = endGame();
    resultDisplay.textContent = `Game Over - ${finalResult}`;

   document.querySelector('.rock').disabled = true;
   document.querySelector('.paper').disabled = true;
   document.querySelector('.scissors').disabled = true;
   
  }
}

document.querySelector('.playAgain').addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = `playerScore: ${playerScore}`
  computerScoreDisplay.textContent = `computerScore: ${computerScore}`
  resultDisplay.textContent = ''
  document.querySelector('.rock').disabled = false;
  document.querySelector('.paper').disabled = false;
  document.querySelector('.scissors').disabled = false;

  startGame(playerSelection);
});