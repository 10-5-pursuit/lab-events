const tttBoard = document.querySelector('.tic-tac-toe');


let boxCounter = 0;

function makeBoard() {
    
    for(let i = 0;i < 9; i++) {
        const squares = document.createElement('div');
        squares.classList.add('square');
        squares.classList.add('empty');
        tttBoard.appendChild(squares);
    }
    
}
makeBoard();

function makeMove (square) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('click', () => {
            makeMove(square);
        })
    });
    if (square.classList.contains('empty')) {
        square.classList.remove('empty');
        square.innerHTML = `${!(boxCounter % 2) ? 'X' : 'O'}`;
        boxCounter++;
    }
    
};
makeMove();

const resetGame = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.remove();
    });
    makeBoard();
    makeMove();
    boxCounter = 0;
}



window.addEventListener('load',() => {
    makeBoard();
    makeMove();

    const reset = document.querySelector('button');
    reset.addEventListener('click', () => {
        resetGame();
    })
})

