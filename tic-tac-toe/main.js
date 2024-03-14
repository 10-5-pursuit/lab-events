function makeBoard() {
    let squares = [];
        for (let i = 0; i < 9; i++){
            let square = document.createElement("div");
            square.className = "square empty";
            squares.push(square);
        }
        
        board.append(...squares);
}

function makeMove(){
    let player = "X";
    let squares = document.querySelector(".tic-tac-toe").children;
    for (const square of squares) {
        square.addEventListener("click", () => {
            if (square.className.includes("empty")){
                square.innerText = player;
                square.className = "square";
                if (player === "X") player = "O";
                else if (player === "O") player = "X";
            }
        })
    }
}

function reset() {
    for (let i = board.children.length-1; i >= 0; i--){
        board.removeChild(board.children[i]);
    }
    makeBoard();
    makeMove();
}

let board = document.querySelector(".tic-tac-toe");

resetButton = document.querySelector("button");
resetButton.addEventListener("click", reset);

makeBoard();
makeMove();