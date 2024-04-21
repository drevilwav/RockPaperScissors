let result = document.querySelector("#result");
let results = document.querySelector("#results");
let playerWin = 0;
let compWin = 0;

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.textContent = "Draw! Try again!";
  } else if ((playerSelection === "rock" && computerSelection === "paper") ||
  (playerSelection === "paper" && computerSelection === "scissors") ||
  (playerSelection === "scissors" && computerSelection === "rock")) {
result.textContent = `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}!`;
compWin++
} else {
result.textContent = `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}!`;
playerWin++
}
results.textContent = `Player won ${playerWin} times, and Computer won ${compWin}`
}

let container = document.querySelector("#button-container");
container.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    playerSelection = event.target.dataset.action;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    }
  }
)
