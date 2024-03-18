const container = document.getElementById('canvas'); 
const currentColor = document.getElementById('current-color');
const colors = document.querySelectorAll('.color');

const handleMouseOver = (event) => {
    event.target.style.background = currentColor.style.background;
}

for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', handleMouseOver);
    container.appendChild(cell); 
}

for (let color of colors) {
    color.addEventListener('click', () => {
        currentColor.style.background = color.style.background;
    });
}

