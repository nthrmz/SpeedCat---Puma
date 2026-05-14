const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const bestScoreEl = document.getElementById("bestScore");
const messageEl = document.getElementById("message");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const padButtons = document.querySelectorAll("[data-direction]");

const tileCount = 21;
const tileSize = canvas.width / tileCount;
const startSpeed = 145;
const minSpeed = 70;

let snake;
let food;
let direction;
let nextDirection;
let score;
let bestScore = Number(localStorage.getItem("snakeBestScore")) || 0;
let gameTimer;
let speed;
let isRunning = false;
let isPaused = false;

const directions = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 }
};

bestScoreEl.textContent = bestScore;
resetGame();
drawGame();

function resetGame() {
  snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
  ];
  direction = directions.right;
  nextDirection = directions.right;
  score = 0;
  speed = startSpeed;
  food = createFood();
  scoreEl.textContent = score;
}

function startGame() {
  clearInterval(gameTimer);
  if (!isPaused) {
    resetGame();
  }

  isRunning = true;
  isPaused = false;
  startBtn.textContent = "Reiniciar";
  pauseBtn.textContent = "Pausa";
  hideMessage();
  gameTimer = setInterval(updateGame, speed);
}

function togglePause() {
  if (!isRunning) {
    return;
  }

  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? "Seguir" : "Pausa";

  if (isPaused) {
    clearInterval(gameTimer);
    showMessage("Pausa");
  } else {
    hideMessage();
    gameTimer = setInterval(updateGame, speed);
  }
}

function updateGame() {
  direction = nextDirection;

  const head = { ...snake[0] };
  head.x += direction.x;
  head.y += direction.y;
  const willEat = head.x === food.x && head.y === food.y;

  if (hasCollision(head, willEat)) {
    endGame();
    return;
  }

  snake.unshift(head);

  if (willEat) {
    score += 10;
    scoreEl.textContent = score;
    updateBestScore();
    food = createFood();
    increaseSpeed();
  } else {
    snake.pop();
  }

  drawGame();
}

function drawGame() {
  drawScreenBackground();
  drawFood();
  drawSnake();
}

function drawScreenBackground() {
  ctx.fillStyle = "#b5d46d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(31, 63, 34, 0.12)";
  ctx.lineWidth = 1;

  for (let i = 0; i <= tileCount; i++) {
    const position = Math.round(i * tileSize);
    ctx.beginPath();
    ctx.moveTo(position, 0);
    ctx.lineTo(position, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, position);
    ctx.lineTo(canvas.width, position);
    ctx.stroke();
  }
}

function drawSnake() {
  snake.forEach((segment, index) => {
    const inset = index === 0 ? 2 : 3;
    ctx.fillStyle = index === 0 ? "#102b16" : "#1f3f22";
    roundRect(
      segment.x * tileSize + inset,
      segment.y * tileSize + inset,
      tileSize - inset * 2,
      tileSize - inset * 2,
      4
    );
    ctx.fill();

    if (index === 0) {
      drawEyes(segment);
    }
  });
}

function drawEyes(head) {
  const eyeSize = 3;
  const centerX = head.x * tileSize + tileSize / 2;
  const centerY = head.y * tileSize + tileSize / 2;
  const offsetX = direction.x * 4;
  const offsetY = direction.y * 4;

  ctx.fillStyle = "#d9f5a2";
  ctx.fillRect(centerX + offsetX - 5, centerY + offsetY - eyeSize, eyeSize, eyeSize);
  ctx.fillRect(centerX + offsetX + 2, centerY + offsetY - eyeSize, eyeSize, eyeSize);
}

function drawFood() {
  const x = food.x * tileSize + tileSize / 2;
  const y = food.y * tileSize + tileSize / 2;

  ctx.fillStyle = "#e2514a";
  ctx.beginPath();
  ctx.arc(x, y, tileSize * 0.34, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
  ctx.beginPath();
  ctx.arc(x - 3, y - 4, tileSize * 0.09, 0, Math.PI * 2);
  ctx.fill();
}

function createFood() {
  let newFood;

  do {
    newFood = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount)
    };
  } while (snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y));

  return newFood;
}

function hasCollision(head, willEat) {
  const hitWall = head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount;
  const body = willEat ? snake : snake.slice(0, -1);
  const hitSelf = body.some((segment) => segment.x === head.x && segment.y === head.y);
  return hitWall || hitSelf;
}

function setDirection(newDirection) {
  const selected = directions[newDirection];

  if (!selected) {
    return;
  }

  const isReverse = selected.x + direction.x === 0 && selected.y + direction.y === 0;

  if (!isReverse) {
    nextDirection = selected;
  }
}

function increaseSpeed() {
  const newSpeed = Math.max(minSpeed, startSpeed - Math.floor(score / 40) * 12);

  if (newSpeed !== speed) {
    speed = newSpeed;
    clearInterval(gameTimer);
    gameTimer = setInterval(updateGame, speed);
  }
}

function updateBestScore() {
  if (score > bestScore) {
    bestScore = score;
    bestScoreEl.textContent = bestScore;
    localStorage.setItem("snakeBestScore", bestScore);
  }
}

function endGame() {
  clearInterval(gameTimer);
  isRunning = false;
  isPaused = false;
  startBtn.textContent = "Jugar otra vez";
  pauseBtn.textContent = "Pausa";
  showMessage(`Fin del juego - ${score} pts`);
}

function showMessage(text) {
  messageEl.querySelector("span").textContent = text;
  messageEl.classList.remove("hidden");
}

function hideMessage() {
  messageEl.classList.add("hidden");
}

function roundRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
}

function flashButton(directionName) {
  const button = document.querySelector(`[data-direction="${directionName}"]`);

  if (!button) {
    return;
  }

  button.classList.add("is-active");
  setTimeout(() => button.classList.remove("is-active"), 110);
}

startBtn.addEventListener("click", startGame);
pauseBtn.addEventListener("click", togglePause);

padButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const directionName = button.dataset.direction;
    setDirection(directionName);
    flashButton(directionName);
  });
});

document.addEventListener("keydown", (event) => {
  const keyMap = {
    ArrowUp: "up",
    w: "up",
    W: "up",
    ArrowDown: "down",
    s: "down",
    S: "down",
    ArrowLeft: "left",
    a: "left",
    A: "left",
    ArrowRight: "right",
    d: "right",
    D: "right"
  };

  if (event.code === "Space") {
    event.preventDefault();
    togglePause();
    return;
  }

  const directionName = keyMap[event.key];

  if (directionName) {
    event.preventDefault();
    setDirection(directionName);
    flashButton(directionName);
  }
});
