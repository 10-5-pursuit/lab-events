function makeboard() {
    const board = document.querySelector('.tic-tac-toe');
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.classList.add('empty');
        board.appendChild(div);
    }
    count = 0;
    message.innerHTML ='';
    const square = document.querySelectorAll('.square');
    square.forEach(square => {
        square.addEventListener('click', function () {
            makeMove(square);
        });
    });

    const reset = document.querySelector('button');
    reset.addEventListener('click', function () {
        makeboard();
    });
}


function makeMove(square) {
   
    if (square.classList.contains('empty')) {
        square.classList.remove('empty');
        if (count % 2)
            square.innerHTML = 'X';
        else
            square.innerHTML = 'O';

        count++;
      
        if(count==9){
            message.innerHTML="Game Over";
        }
    }
}


let count = 0;
let message = document.querySelector('.message');
makeboard();