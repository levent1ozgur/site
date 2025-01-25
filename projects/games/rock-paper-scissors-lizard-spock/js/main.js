let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const result = getResult(playerChoice, computerChoice);

  if (result === "win") {
    playerScore++;
  } else if (result === "lose") {
    computerScore++;
  }

  updateScoreboard();
  displayResult(result, playerChoice, computerChoice);
}

function getResult(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (
    (player === "rock" && (computer === "scissors" || computer === "lizard")) ||
    (player === "paper" && (computer === "rock" || computer === "spock")) ||
    (player === "scissors" &&
      (computer === "paper" || computer === "lizard")) ||
    (player === "lizard" && (computer === "spock" || computer === "paper")) ||
    (player === "spock" && (computer === "rock" || computer === "scissors"))
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function updateScoreboard() {
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function displayResult(result, playerChoice, computerChoice) {
  const resultText = document.getElementById("result-text");
  if (result === "draw") {
    resultText.textContent = `It's a draw! Both chose ${playerChoice}.`;
  } else if (result === "win") {
    resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}
