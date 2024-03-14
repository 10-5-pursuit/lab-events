const currentColorCell = document.querySelector('.current-color-cell');
const colors = document.querySelectorAll(".color");
const resetButton = document.getElementById("reset-button");
const paintAllButton = document.getElementById('paint-all');
const canvasGrid = document.getElementById('canvas');
const gridSize = document.getElementById('size');
let GridNumber = 0;
let cells;
let newCell = document.createElement('div');
newCell.classList.add('cell');

//function that initializes the eventListeners in cells
function start(){
    for(let cell of cells){
        cell.addEventListener('click', ()=>{
            cell.style.background = currentColorCell.style.background;
        });
    }  
    function paintAll (){
        for(let cell of cells){
            cell.style.background = currentColorCell.style.background;
        }
    }
    paintAllButton.addEventListener('click', ()=>{
        paintAll();
    });
}

function generateGrid(str){

    //clear all cell elements before adding the new ones.
    canvasGrid.innerHTML='';

    //create cells, adjust cells size and grid width base on the "Select" value
    switch(str){
        case "1":
            canvasGrid.style.gridTemplateColumns = 'repeat(5, 100px)';
            GridNumber = 20;
            newCell.style.height = '100px';
            newCell.style.width = '100px';
            break;
        case '2':
            canvasGrid.style.gridTemplateColumns = 'repeat(10, 50px)';
            GridNumber = 80;
            newCell.style.height = '50px';
            newCell.style.width = '50px';
            break;
        case '3':
            canvasGrid.style.gridTemplateColumns = 'repeat(20, 25px)';
            GridNumber = 320;
            newCell.style.height = '25px';
            newCell.style.width = '25px';
            break;

    }
    //adding n number of cells to the main "canvas"
    canvasGrid.appendChild(newCell)
    for(let i=1; i<GridNumber;i++){
        let tempEle = newCell.cloneNode(true);
        canvasGrid.appendChild(tempEle);
    }
}

gridSize.addEventListener('change', ()=>{
    generateGrid(gridSize.value);
    cells = document.querySelectorAll(".cell");
    start();
});


for(let color of colors){
    color.addEventListener('click', ()=>{
        currentColorCell.style.background = color.style.background;
    });
}


resetButton.addEventListener('click', ()=>{
    //refresh the page
    location.reload();
});














