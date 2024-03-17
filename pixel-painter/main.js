document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const currentColor = document.getElementById("current-color");
    const palette = document.getElementById("palette")
})

// Initialize the canvas with cells
for (let i = 0; i < 80; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    canvas.appendChild(cell);
}
