document.addEventListener('DOMContentLoaded', function () {
    makeBoard();
    document.querySelector('button').addEventListener('click', reset);
});

let currentPlayer = 'X';

function makeBoard() {
    const board = document.querySelector('.tic-tac-toe');
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.classList.add('square', 'empty');
        square.addEventListener('click', makeMove);
        board.appendChild(square);
    }
}

function makeMove() {
    if (this.classList.contains('empty')) {
        this.textContent = currentPlayer;
        this.classList.remove('empty');
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function reset() {
    const board = document.querySelector('.tic-tac-toe');
    board.innerHTML = ''; // clears the board
    makeBoard(); // Re-initializes the board
    currentPlayer = 'X'; // Reset to player X
}