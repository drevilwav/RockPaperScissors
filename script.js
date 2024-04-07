function getPlayerChoice() {
  let playerChoice = prompt("Choose your weapon!", "Rock, Paper or Scissors?");  
  if (playerChoice.toLowerCase() !== "rock" && playerChoice.toLowerCase() !== "paper" && playerChoice.toLowerCase() !== "scissors") {
    alert ("Incorrect! Try again!");
    return getPlayerChoice()
  } else {
    return playerChoice.toLowerCase()
  }
}

function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw! Try again!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper!"; 
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper!";
  }
}

function playGame() {
  let playerWin = 0;
  let compWin = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    if (result.includes("Win")) {
      playerWin++;
      } else if (result.includes("Lose")) {
      compWin++;
    }
  }
  return `You wins ${playerWin} times, computer wins ${compWin}`;
}

console.log(playGame());