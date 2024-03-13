const makeBoard = () => {
    const board = document.querySelector('.tic-tac-toe');
    board.innerHTML = `
    <div class="empty square"></div>
    <div class="empty square"></div>
    <div class="empty square"></div>
    <div class="empty square"></div>
    <div class="empty square"></div>
    <div class="empty square"></div>
    <div class="empty square"></div>
    <div class="empty square"></div>
    <div class="empty square"></div>
    `;
};
const makeMove = square => {
    if(square.classList.contains('empty')){
        square.classList.remove('empty');
        square.innerHTML = `${!(count % 2) ? 'X' : 'O'}`;
        count++;
        checkWinner();
    }
};
const resetBoard = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.add('empty');
        square.innerHTML = '';
    });
    count = 0;
};
const checkWinner = () => {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        const squares = document.querySelectorAll('.square');
        if (squares[a].innerHTML && squares[a].innerHTML === squares[b].innerHTML && squares[a].innerHTML === squares[c].innerHTML) {
            setTimeout(function() {
                alert(`${squares[a].innerHTML == 'X' ? 'PLayer One' : 'Player Two'} wins!`);
                resetBoard();
            }, 300);
            return;
        }
    }
    if (count === 9) {
        setTimeout(function() {
            alert('Game Over');
            resetBoard();
        }, 300);
    }
};

let count = 0;
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
window.addEventListener('load', function(){
    makeBoard();
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('click', function(){
            makeMove(square);
        });
    });
    const reset = document.querySelector('button');
    reset.addEventListener('click', function(){
        resetBoard();
    });
});

