function getPlayerChoice() {
  let playerChoice = prompt("Choose your weapon!", "Rock, Paper or Scissors?");
  return playerChoice.toLowerCase();
}

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw! Try again!";
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock!";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock!";
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beats Paper!"; 
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Paper!";
  }
}
