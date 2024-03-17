const pallete = document.querySelectorAll('.color');
const currentColor = document.querySelector('#current-color');
const block = document.querySelectorAll('.cell');

pallete.forEach(elem => {
    elem.addEventListener('click', (e) => {
        currentColor.style.backgroundColor = e.target.style.backgroundColor;
    });
});

block.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.target.style.backgroundColor = currentColor.style.backgroundColor;
    });
});

const button = document.createElement('button').innerHTML = 'RESET';
document.querySelector('#wrapper #canvas-palette-wrapper #palette').appendChild(button);