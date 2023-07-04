let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "rock") {
    let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. It is a draw`;
    return result;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. You Lost.`;
    computerScore++;
    return result;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. You Won.`;
    playerScore++;
    return result;
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. It is a draw.`;
    return result;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. You Won.`;
    playerScore++;
    return result;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. You Lost.`;
    computerScore++;
    return result;
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. It is a draw.`;
    return result;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. You Lost.`;
    computerScore++;
    return result;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    let result = `Your choice is: ${playerSelection}, computer's choice is: ${computerSelection}. You Won.`;
    playerScore++;
    return result;
  } else {
    let result = "You must only enter rock, paper or scissors!";
    return result;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter rock, paper or scissors to play. \n(If it is your first time press cancel and read the instructions first.)"
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
if (playerScore > computerScore) {
  console.log(
    `Your score is: ${playerScore}, computer's score is: ${computerScore}. Congrats, you won the game!`
  );
} else if (computerScore > playerScore) {
  console.log(
    `Your score is: ${playerScore}, computer's score is: ${computerScore}. Unfortunately you lost.`
  );
} else {
  console.log(
    `Your score is: ${playerScore}, computer's score is: ${computerScore}. It is a draw!`
  );
}
