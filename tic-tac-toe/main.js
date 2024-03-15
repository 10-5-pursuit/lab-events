const tttArea = document.querySelector('.tic-tac-toe');
let play = document.createElement('p')
let currentPlayerDisplay = document.getElementById('current-player');
const resetButton = document.getElementById('reset-button');
let playerXCount = document.getElementById('player-x');
let playerOCount = document.getElementById('player-o');
const popMessage = document.querySelector('.pop-message');
let squares;
let playerXscore = 0;
let playerOscore = 0;

play.innerHTML = 'X';

function makeBoard() {
    //clear all elements inside of tttArea
    tttArea.innerHTML='';

    popMessage.style.visibility = 'hidden';

    let newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.classList.add('empty');

    tttArea.appendChild(newSquare)
    
    for(let i=1; i<9;i++){
        let tempEle = newSquare.cloneNode(true);
        tttArea.appendChild(tempEle);
    }
    squares = document.querySelectorAll('.square');

    for (let square of squares){
        square.addEventListener('click', makeMove);
    }
}
makeBoard();

function currentPlayer (player){
    if(player.innerHTML == 'X'){
        currentPlayerDisplay.innerText= 'O';
        return 'O';
    }else{
        currentPlayerDisplay.innerText= 'X';
        return 'X';
    }
}

function makeMove(event) {
    const square = event.target;
    let onGoingPlay = play.cloneNode(true);  

    if(square.className.includes('empty')){
        
        square.appendChild(onGoingPlay);
        square.classList.remove('empty');
        checkBoard();
        play.innerHTML= currentPlayer(play);
    }
}

function displayWinner(str){
    if(str=='X'){
        playerXscore++;
        popMessage.querySelector('p').innerText = 'X Player Wins!';
        popMessage.style.visibility = 'visible';
        playerXCount.querySelector('span').innerText = playerXscore.toString();
        for (let square of squares){
            square.removeEventListener('click',makeMove);
        }
    }else{
        playerOscore++;
        popMessage.querySelector('p').innerText = 'O Player Wins!';
        popMessage.style.visibility = 'visible';
        playerOCount.querySelector('span').innerText = playerOscore.toString();
        for (let square of squares){
            square.removeEventListener('click',makeMove);
        }
    }
}

function checkBoard(){
    let arr=[];
    for(let square of squares){
        if(square.innerHTML == '<p>X</p>'){
            arr.push('X');
        }else if((square.innerHTML == '<p>O</p>')){
            arr.push('O');
        }else{
            arr.push(' ');
        }
    }

    let gameOver = false;
    const posibleTTT = [
    arr[0]+arr[1]+arr[2],
    arr[3]+arr[4]+arr[5],
    arr[6]+arr[7]+arr[8],
    arr[0]+arr[3]+arr[6],
    arr[1]+arr[4]+arr[7],
    arr[2]+arr[5]+arr[8],
    arr[0]+arr[4]+arr[8],
    arr[2]+arr[4]+arr[6]
    ]
    for(let str of posibleTTT){
        if (str == 'XXX' || str == 'OOO'){
            displayWinner(str[0]);
            gameOver = true
        }
    }

    if(!arr.includes(' ') && !gameOver){
        popMessage.querySelector('p').innerText = 'Draw!';
        popMessage.style.visibility = 'visible';
    }

}

resetButton.addEventListener('click', ()=>{ 
    makeBoard();
});




