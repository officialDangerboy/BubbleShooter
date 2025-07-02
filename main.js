const container = document.querySelector('.container');
const target = document.querySelector('.targate');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');

let time = 5;
let interval;
let currentTarget;
let currentScore = 0;

function createBubbles(count) {
  container.innerHTML = '';
  for (let i = 0; i <= count; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.innerText = Math.floor(Math.random() * 10 + 1);
    container.appendChild(bubble);
  }
}

function startTimer() {
  setInterval(() => {
    if (time <= 0) {
      container.innerHTML = `
        <div class='gameOver'>
          <div>Game Over</div>
          <button onclick="resetGame()">Restart Game</button>
        </div>
      `;
      return;
    }
    time--;
    timer.innerText = time;
  }, 1000);
}

function resetTimer() {
  time = 5;
  timer.innerText = time;
}

function resetGame() {
  currentScore = 0;
  score.innerText = currentScore;
  generateTarget();
  createBubbles(71);
  resetTimer();
}

function generateTarget() {
  currentTarget = Math.floor(Math.random() * 10 + 1);
  target.innerText = currentTarget;
}

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('bubble')) {
    const value = Number(e.target.innerText);
    if (value === currentTarget) {
      currentScore += 10;
      score.innerText = currentScore;
      generateTarget();
      createBubbles(71);
      resetTimer();
    }
    createBubbles(71);
  }
});

generateTarget();
createBubbles(71);
startTimer();
