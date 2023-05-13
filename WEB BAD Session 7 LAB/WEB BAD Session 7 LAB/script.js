const MAX_WIDTH = 1867;
const MAX_HEIGHT = 892;
const GAME_SCREEN = document.getElementById("game-screen");
const PAUSE_SCREEN = document.getElementById("pause-screen");
const MAX_ITEMS = 3;
const PADDING = 150;
let remaining_items = 0;
let pause_flag = false;

function generateRandom(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min);
}

function generateTarget() {
  const target = document.createElement("div");
  target.classList.add("target");

  const x = generateRandom(0, MAX_WIDTH - PADDING)
  const y = generateRandom(PADDING, MAX_HEIGHT - PADDING);

  target.style.left = `${x}px`
  target.style.top = `${y}px`

  target.addEventListener("click", () => {
    remaining_items--;
    target.remove();
  });

  GAME_SCREEN.appendChild(target);
  remaining_items++;
}

window.addEventListener("mousemove", (e) => {
  console.log(`x : ${e.x}, y : ${e.y}`);
});

window.addEventListener("keyup", (e) => {
  if(e.code === "Space") {
    pause_flag = !pause_flag; 
  }
})

function startGame() {
  for (remaining_items; remaining_items < 3;) {
    generateTarget();
  }
  PAUSE_SCREEN.style.display = (pause_flag) ? "block" : "none";
  requestAnimationFrame(startGame);
}

startGame();