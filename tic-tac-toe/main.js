const board = document.querySelector(".tic-tac-toe");
const button = document.querySelector("button");

let currentPlayer = "X";
let turns = 1;

function makeMove(event) {
  if (event.target.className.includes("empty")) {
    event.target.classList.remove("empty");
    turns++;
    event.target.textContent = currentPlayer;
    if (turns >= 4 && getGameStatus()) {
      alert(`${currentPlayer} won!\nClick Reset to play again.`);
      board.classList.add("game-over");
    } else if (currentPlayer == "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  }
}

function makeBoard() {
  board.innerHTML = "";
  for (let x = 1; x <= 9; x++) {
    const cell = document.createElement("div");
    cell.classList.add("empty", "square");
    cell.addEventListener("click", makeMove);
    board.appendChild(cell);
  }
}

button.addEventListener("click", () => {
  currentPlayer = "X";
  turns = 0;
  board.classList.remove("game-over");
  makeBoard();
});

function getGameStatus() {
  const winningConditions = [
    [0, 1, 2], // Horizontals
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Verticals
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonals
    [2, 4, 6],
  ];

  game = [];
  board.childNodes.forEach((cell) => {
    game.push(cell.innerText);
  });

  for (const condition of winningConditions) {
    const [x, y, z] = condition;
    if (game[x] == game[y] && game[x] == game[z]) {
      return game[x];
    }
  }
  return none;
}

makeBoard();
