let currentColor = document.getElementById("current-color");
let pallet = document.getElementById("palette");

for (let color of pallet.children) {
    color.style.cursor = "pointer";
    color.addEventListener("click", () => {
        currentColor.style.backgroundColor = color.style.backgroundColor;
    });
}

let canvas = document.getElementById("canvas");

for (let i = 0; i < 80; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("click", () => {
        cell.style.backgroundColor = currentColor.style.backgroundColor;
    })
    canvas.append(cell);
}

let resetButton = document.createElement("div");
resetButton.className = ("color");
resetButton.style.cursor = "pointer";

let resetText = document.createElement("div");
resetText.innerText = "RESET";
resetText.style.textAlign = "center";
resetText.style.fontSize = "14px";
resetText.style.position = "relative";
resetText.style.top = "17px";
resetButton.append(resetText);

resetButton.addEventListener("click", () => {
    for (const cell of canvas.children) {
        cell.style.backgroundColor = "white";
    }
    currentColor.style.backgroundColor = "white";
})

pallet.append(resetButton);



