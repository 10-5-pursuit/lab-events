document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const currentColor = document.getElementById("current-color");
    const palette = document.getElementById("palette");

    // Initialize the canvas with cells
    for (let i = 0; i < 80; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        canvas.appendChild(cell);
    }

    // Change current color on palette color click
    palette.addEventListener("click", function (e) {
        if (e.target.classList.contains("color")) {
            currentColor.style.background = e.target.style.background;
        }
    });

    // Change cell color on click to match current color
    canvas.addEventListener("click", function (e) {
        if (e.target.classList.contains("cell")) {
            e.target.style.background = currentColor.style.background;
        }
    });

});

