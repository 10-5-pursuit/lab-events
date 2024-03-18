const canvas = document.getElementById('canvas');



function populate(size) {
    canvas.style.setProperty('--size', size)
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('click', function () {
            const currentColor = document.getElementById('current-color');
            const color = currentColor.style.backgroundColor;
            this.style.background = color;
        })
        canvas.appendChild(div);
    }
}

const cDiv = document.querySelectorAll('.color');
cDiv.forEach(cDiv => {
    cDiv.addEventListener('click', function () {
        const color = this.style.backgroundColor;
        const currColor = document.getElementById('current-color');
        currColor.style.background = color;
    })
})

const reset = document.querySelector('.btn');
reset.addEventListener('click', function(){
    canvas.innerHTML ='';
    populate(10);
})








populate(10);