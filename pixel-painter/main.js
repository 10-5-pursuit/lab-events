const canvas = document.getElementById("canvas");
const palette = document.getElementById("palette");
const currentColor = document.getElementById("current-color");
const title = document.querySelector("header h1");
let currentSize = 50;

// Set Color and Paint
for (const color of palette.childNodes) {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
  });

  color.addEventListener("dblclick", () => {
    currentColor.style.background = color.style.background;
    for (const cell of canvas.childNodes) {
      cell.style.background = color.style.background;
    }
  });
}

title.addEventListener("mouseover", () => {
  title.textContent = "Clear Canvas";
});

title.addEventListener("mouseout", () => {
  title.textContent = "Pixel Painter";
});

title.addEventListener("click", () => {
  for (const cell of canvas.childNodes) {
    cell.style.background = "";
  }
});

currentColor.addEventListener("click", () => {
  canvas.innerHTML = "";
  if (currentSize != 50) {
    currentSize = 50;
    drawCanvas(50);
  } else {
    currentSize = 25;
    drawCanvas(25);
  }
});

// Draw Canvas
function drawCanvas(size) {
  const h_cells = 500 / size;
  const v_cells = 400 / size;
  const n_cells = h_cells * v_cells;

  canvas.style.gridTemplateColumns = `repeat(${h_cells}, ${size}px)`;
  for (let x = 0; x < n_cells; x++) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.style.width = `${size}px`;
    newCell.style.height = `${size}px`;

    // newCell.addEventListener("mousedown", () => {
    newCell.addEventListener("click", () => {
      if (newCell.style.background == currentColor.style.background) {
        newCell.style.background = "";
      } else {
        newCell.style.background = currentColor.style.background;
      }
    });
    canvas.appendChild(newCell);
  }
}

drawCanvas(currentSize);
