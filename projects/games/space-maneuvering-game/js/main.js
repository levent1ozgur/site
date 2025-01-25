// Setup canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load the asteroid image
const asteroidImage = new Image();
asteroidImage.src =
  "https://raw.githubusercontent.com/levent1ozgur/projects/refs/heads/main/assets/asteroid.png";

// Load the spaceship image
const spaceshipImage = new Image();
spaceshipImage.src =
  "https://raw.githubusercontent.com/levent1ozgur/projects/refs/heads/main/assets/spaceship.png";

// Game settings
const ship = {
  x: canvas.width / 2,
  y: canvas.height - 100,
  size: 50, // Size for the spaceship image
  speed: 5
};

const asteroids = [];
const asteroidCount = 50;
const asteroidSize = 32;
const asteroidSpeed = 2;

let gameStarted = false;
let gameOver = false;
let countdown = 3;
let timer = 0;
let timerInterval;

// Initialize asteroids
function initAsteroids() {
  asteroids.length = 0;
  for (let i = 0; i < asteroidCount; i++) {
    asteroids.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height
    });
  }
}

// Handle keyboard input
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
};

document.addEventListener("keydown", (e) => {
  if (keys.hasOwnProperty(e.key)) keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  if (keys.hasOwnProperty(e.key)) keys[e.key] = false;
});

let speedMultiplier = 1;

// Update game state
function update() {
  if (!gameStarted || gameOver) return;

  // Move the ship
  if (keys.ArrowUp) ship.y -= ship.speed;
  if (keys.ArrowDown) ship.y += ship.speed;
  if (keys.ArrowLeft) ship.x -= ship.speed;
  if (keys.ArrowRight) ship.x += ship.speed;

  // Keep ship within bounds
  if (ship.x < ship.size / 2) ship.x = ship.size / 2;
  if (ship.x > canvas.width - ship.size / 2)
    ship.x = canvas.width - ship.size / 2;
  if (ship.y < ship.size / 2) ship.y = ship.size / 2;
  if (ship.y > canvas.height - ship.size / 2)
    ship.y = canvas.height - ship.size / 2;

  // Move asteroids with speed multiplier
  asteroids.forEach((asteroid) => {
    asteroid.y += asteroidSpeed * speedMultiplier;

    // Reset asteroid to the top when it goes off-screen
    if (asteroid.y > canvas.height) {
      asteroid.y = -asteroidSize;
      asteroid.x = Math.random() * canvas.width;
    }

    // Check for collisions
    const dist = Math.hypot(ship.x - asteroid.x, ship.y - asteroid.y);
    if (dist < ship.size / 2 + asteroidSize / 2) {
      gameOver = true;
      clearInterval(timerInterval);
      showTryAgainButton();
    }
  });
}

// Draw game elements
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!gameStarted) {
    drawMainMenu();
    return;
  }

  if (gameOver) {
    drawGameOverScreen();
    return;
  }

  // Draw asteroids
  asteroids.forEach((asteroid) => {
    ctx.drawImage(
      asteroidImage,
      asteroid.x - asteroidSize / 2,
      asteroid.y - asteroidSize / 2,
      asteroidSize,
      asteroidSize
    );
  });

  // Draw spaceship
  ctx.drawImage(
    spaceshipImage,
    ship.x - ship.size / 2,
    ship.y - ship.size / 2,
    ship.size,
    ship.size
  );
}

// Draw main menu
function drawMainMenu() {
  ctx.fillStyle = "#f1f0ef";
  ctx.font = "50px Times New Roman";
  ctx.textAlign = "center";
  ctx.fillText(
    "Space Maneuvering Game",
    canvas.width / 2,
    canvas.height / 2 - 50
  );
  ctx.font = "30px Times New Roman";
  ctx.fillText('Click "Start" to Begin', canvas.width / 2, canvas.height / 2);
}

// Countdown before game starts
function startCountdown() {
  const interval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f1f0ef";
    ctx.font = "100px Times New Roman";
    ctx.textAlign = "center";
    ctx.fillText(
      countdown > 0 ? countdown : "GO!",
      canvas.width / 2,
      canvas.height / 2
    );
    countdown--;

    if (countdown < -1) {
      clearInterval(interval);
      gameStarted = true;
      initAsteroids();
      timer = 0;

      // Start the speed multiplier increment
      setInterval(() => {
        speedMultiplier *= 1.05; // Increase speed by 5%
      }, 10000);

      // Start the game timer
      timerInterval = setInterval(() => timer++, 1000);

      // Start the game loop
      gameLoop();
    }
  }, 1000);
}

// Draw game over screen
function drawGameOverScreen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the game over message
  ctx.fillStyle = "#f1f0ef";
  ctx.font = "50px Times New Roman";
  ctx.textAlign = "center";
  ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2 - 100);

  // Display final timer and speed information
  ctx.font = "30px Times New Roman";
  const finalSpeed = (ship.speed * speedMultiplier).toFixed(2); // Final speed
  ctx.fillText(`Time Survived: ${timer} seconds`, canvas.width / 2, 40); // Timer at the top
  ctx.fillText(`Final Speed: ${finalSpeed} px/s`, canvas.width / 2, 80); // Speed at the top
}

// Show "Try Again" button and time message
function showTryAgainButton() {
  const button = document.createElement("button");
  button.innerText = "Try Again";
  button.style.position = "absolute";
  button.style.left = "50%";
  button.style.top = "50%";
  button.style.transform = "translate(-50%, -50%)";
  button.style.padding = "10px 20px";
  button.style.fontSize = "20px";
  document.body.appendChild(button);

  button.onclick = () => {
    button.remove();
    gameOver = false;
    countdown = 3;
    ship.x = canvas.width / 2;
    ship.y = canvas.height - 100;
    speedMultiplier = 1;
    initAsteroids();
    startCountdown();
  };
}

// Main game loop
function gameLoop() {
  update();
  draw();
  if (!gameOver) requestAnimationFrame(gameLoop);
}

// Start button
const startButton = document.createElement("button");
startButton.innerText = "Start";
startButton.style.position = "absolute";
startButton.style.left = `${canvas.width / 2 - 50}px`;
startButton.style.top = `${canvas.height / 2 + 50}px`;
startButton.style.padding = "10px 20px";
startButton.style.fontSize = "20px";
document.body.appendChild(startButton);

startButton.onclick = () => {
  startButton.remove();
  startCountdown();
};
