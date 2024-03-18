
let currentPlayer = 'X';
makeBoard();
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', makeMove);
});
function makeBoard() {
    const wrapper = document.querySelector('#wrapper');
    wrapper.innerHTML = ''; 
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const square = document.createElement('div');
            square.classList.add('square', 'empty');
            wrapper.appendChild(square);
        }
    }  
    wrapper.style.display = 'grid';
    wrapper.style.gridTemplateColumns = 'repeat(3, 1fr)';
    wrapper.style.maxWidth = '360px';
}
function makeMove(event) {
    const square = event.target;
    if (square.classList.contains('empty')) {
        if (!square.textContent) {
            square.textContent = currentPlayer;
            square.classList.remove('empty');
            if (checkWin() || checkDraw()) {
                gameOver();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 
            }
        }
    }
}
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', reset);
function reset() {
    makeBoard();
    currentPlayer = 'X'; 
    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('click', makeMove);
    });
}
function checkWin() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let line of lines) {
        const [a, b, c] = line;
        const squares = document.querySelectorAll('.square');
        if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
            return true;
        }
    }
    return false;
}
function checkDraw() {
    const squares = document.querySelectorAll('.square');
    for (let square of squares) {
        if (square.classList.contains('empty')) {
            return false;
        }
    }
    return true;
}
function gameOver() {
    if (checkWin()) {
        alert(`${currentPlayer} wins!`);
    } else if (checkDraw()) {
        alert("Game Over - It's a draw!");
    }
    reset();
}


