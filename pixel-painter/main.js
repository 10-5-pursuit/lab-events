const canvas = document.getElementById("canvas");
const grid4x6 = document.getElementById("grid-4x6");
const grid8x12 = document.getElementById("grid-8x12");
const grid12x18 = document.getElementById("grid-12x18");
const colors = document.querySelectorAll(".color"); // Renk kutularını seç

let currentColor = "black"; // Varsayılan başlangıç rengi

// Varsayılan olarak 4x6 ızgarayı ayarla
setGridSize(4, 6);

// Grid boyutu seçeneklerini dinle
grid4x6.addEventListener("click", function() {
    setGridSize(4, 6);
});

grid8x12.addEventListener("click", function() {
    setGridSize(8, 12);
});

grid12x18.addEventListener("click", function() {
    setGridSize(12, 18);
});

// Renk kutularını dinle ve seçilen rengi güncelle
colors.forEach(function(color) {
    color.addEventListener("click", function() {
        currentColor = window.getComputedStyle(color).backgroundColor;
        document.getElementById("current-color").style.backgroundColor = currentColor;
    });
});

// Canvas hücrelerine tıklanıldığında rengi değiştir
canvas.addEventListener("click", function(event) {
    if (event.target.classList.contains("cell")) {
        event.target.style.backgroundColor = currentColor;
    }
});

// Grid boyutunu ayarla
function setGridSize(rows, columns) {
    canvas.innerHTML = ""; // Önceki gridi temizle

    // Yeni gridi oluştur
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            canvas.appendChild(cell);
        }
    }

    // Gridin stilini güncelle
    canvas.style.gridTemplateColumns = `repeat(${columns}, 50px)`;
    canvas.style.height = `${rows * 50}px`;
}
