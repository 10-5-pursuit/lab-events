const ticTacToe = document.querySelector('.tic-tac-toe');
const button = document.querySelector('#wrapper section button');

function makeBoard(element) {
    for (let i = 1; i <= 9; i++) {
        const square = document.createElement('div');
        square.classList.add('empty', 'square');
        element.appendChild(square);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    makeBoard(ticTacToe);
    const blocks = document.querySelectorAll('.tic-tac-toe .square');
    
    let currentInput = { 'input': 'O' };
    
    // function makeMove(e) {
        // if (e.target.classList.contains('empty')) {
        //     e.target.classList.remove('empty');
        //     e.target.innerText = currentInput === 'O' ? 'X' : 'O';
        //     currentInput = e.target.innerText;
        // } else {
        //     e.preventDefault();
        // }
    // }

    
    blocks.forEach(block => {
        block.addEventListener('click', function(e) {
            if (e.target.classList.contains('empty')) {
                currentInput.input = currentInput.input === 'O' ? 'X' : 'O';
                e.target.innerText = currentInput.input;
                e.target.classList.remove('empty');
            } else {
                e.preventDefault();
            }
        });
    });

    // button.addEventListener('click', function() {
    //     ticTacToe.removeChild(blocks);
    //     makeBoard(ticTacToe);
    // });

    button.addEventListener('click', function() {
        blocks.forEach(block => {
            ticTacToe.removeChild(block);
        });
        makeBoard(ticTacToe);
    });
});
