let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
var roundCount = 0;
const container = document.getElementById("results");
const breakLine = document.createElement("br")

function getComputerChoice() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  roundCount++;
  if (roundCount % 6 == 0) {
    let element = document.createElement("p");
    element.textContent = results();
    container.appendChild(element);
  } else {
    if (playerSelection == "rock" && computerSelection == "rock") {
      let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. It is a draw`;
      let element = document.createElement("p");
      element.textContent = `${result}\nYour score is: ${playerScore}, computer's score is: ${computerScore}.`;
      container.appendChild(element);
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. You Lost.`;
      computerScore++;
      let element = document.createElement("p");
      element.textContent = `${result}\nYour score is: ${playerScore}, computer's score is: ${computerScore}.`;
      container.appendChild(element);
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. You Won.`;
      playerScore++;
      let element = document.createElement("p");
      element.textContent = `${result}\nYour score is: ${playerScore}, computer's score is: ${computerScore}.`;
      container.appendChild(element);
    } else if (playerSelection == "paper" && computerSelection == "paper") {
      let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. It is a draw.`;
      let element = document.createElement("p");
      element.textContent = `${result}\nYour score is: ${playerScore}, computer's score is: ${computerScore}.`;
      container.appendChild(element);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. You Won.`;
      playerScore++;
      let element = document.createElement("p");
      element.textContent = `${result}\nYour score is: ${playerScore}, computer's score is: ${computerScore}.`;
      container.appendChild(element);
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. You Lost.`;
      computerScore++;
      let element = document.createElement("p");
      element.textContent = `${result}\nYour score is: ${playerScore}, computer's score is: ${computerScore}.`;
      container.appendChild(element);
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "scissors"
    ) {
      let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. It is a draw.`;
      let element = document.createElement("p");
      element.textContent = `${result}\nYour score is: ${playerScore}, computer's score is: ${computerScore}.`;
      container.appendChild(element);
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      let result = `Your choice is: ${playerSelection}, computer's choice is ${computerSelection}. You Lost.`;
      computerScore++;
      let element = document.createElement("p");
      element.textContent = `${result}\nYour score is: ${playerScore}, computer's score is: ${computerScore}.`;
      container.appendChild(element);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      let result = `Your choice is: ${playerSelection}, computer's choice is: ${computerSelection}. You Won.`;
      playerScore++;
      let element = document.createElement("p");
      element.textContent = `${result}\nYour score is: ${playerScore}, computer's score is: ${computerScore}.`;
      container.appendChild(element);
    } else {
      let result = "You must only enter rock, paper or scissors!";
      let element = document.createElement("p");
      element.textContent = `${result}\nYour score is: ${playerScore}, computer's score is: ${computerScore}.`;
      container.appendChild(element);
    }
  }
}

function results() {
  if (playerScore > computerScore) {
    let element = document.createElement("p");
    element.textContent = `Game Over! Your score is: ${playerScore}, computer's score is: ${computerScore}. Congrats, you won the game!`;
    container.appendChild(element);
    container.appendChild(breakLine);
  } else if (computerScore > playerScore) {
    let element = document.createElement("p");
    element.textContent = `Game Over! Your score is: ${playerScore}, computer's score is: ${computerScore}. Unfortunately you lost.`;
    container.appendChild(element);
    container.appendChild(breakLine);
  } else {
    let element = document.createElement("p");
    element.textContent = `Game Over! Your score is: ${playerScore}, computer's score is: ${computerScore}. It is a draw!`;
    container.appendChild(element);
    container.appendChild(breakLine);
  }
}

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});
