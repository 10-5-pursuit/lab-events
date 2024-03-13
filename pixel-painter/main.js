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

const button = document.createElement('button').classList.add('.button');

document.body.querySelector('#canvas-palette-wrapper').appendChild(button);
