const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const levelElement = document.getElementById("level");
const customizeButton = document.getElementById("customize-game");
let score = 0;
let level = 1;

// Dynamic canvas size
canvas.width = canvas.parentElement.offsetWidth;
canvas.height = canvas.parentElement.offsetHeight;

let gameInterval;

// Function to draw random bubbles
function drawBubble() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = 10 + Math.random() * 20;
  const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

// Function to update the game
function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 10; i++) drawBubble();
}

// Function to handle scoring
function increaseScore() {
  score += 10;
  scoreElement.textContent = `Score: ${score}`;
  if (score % 50 === 0) {
    level++;
    levelElement.textContent = `Level: ${level}`;
  }
}

// Customize game
customizeButton.addEventListener("click", () => {
  const gameName = prompt("Enter a new game name:");
  const bgColor = prompt("Enter a background color:");
  if (gameName) document.getElementById("game-title").textContent = gameName;
  if (bgColor) document.body.style.background = bgColor;
});

// Redirect function
function redirect() {
  window.open("https://felllilyforegoing.com/g4qyy4jpj0?key=dc61212865c7c209d69058e2787705cf", "_blank");
}

// Start the game
function startGame() {
  gameInterval = setInterval(updateGame, 1000);
  setInterval(redirect, 15000);
}

startGame();
