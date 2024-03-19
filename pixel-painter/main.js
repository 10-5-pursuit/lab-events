const palette = document.querySelectorAll('.color');
const specificColorBox = document.querySelector("#current-color");
const box = document.querySelectorAll(".cell");
const button = document.querySelector('button')


for(let i = 0; i < palette.length;i++){
    palette[i].addEventListener("click", 
    function(clickIt){
        specificColorBox.style.backgroundColor = clickIt.target.style.backgroundColor
    })
}

for(let i = 0; i < box.length; i++){
    box[i].addEventListener('click', function(clickIt){
        clickIt.target.style.backgroundColor = specificColorBox.style.backgroundColor
    })
}

button.addEventListener('click', function (){
    for(let i = 0; i < box.length;i++){
        box[i].style.backgroundColor = "white"
    }
})





