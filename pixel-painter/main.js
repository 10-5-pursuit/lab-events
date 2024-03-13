const colorDivs = document.querySelectorAll('.color');
colorDivs.forEach(colorDiv => {
  colorDiv.addEventListener('click', function() {
    const color = this.style.backgroundColor;
    const currentColor = document.getElementById('current-color');
    currentColor.style.background = color;
  });
});

const cellDivs = document.querySelectorAll('.cell');
cellDivs.forEach(cellDiv => {
    cellDiv.addEventListener('click', function(){
        const currentColor = document.getElementById('current-color');
        const color = currentColor.style.backgroundColor;
        this.style.background = color;
    })
})

const reset = document.querySelector('button');
reset.addEventListener('click', function(){
    const cellDivs = document.querySelectorAll('.cell');
    cellDivs.forEach(cellDiv => {
        cellDiv.style.background = 'white';
    })
})

const currentColor = document.getElementById('current-color');
currentColor.addEventListener('click', function(){
    const color = currentColor.style.backgroundColor;
    const cellDivs = document.querySelectorAll('.cell');
    cellDivs.forEach(cellDiv => {
        cellDiv.style.background = color;
    })
})