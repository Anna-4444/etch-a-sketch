const gridContainer = document.querySelector(".grid-container");
const pixelButton = document.querySelector(".pixel-button");
const clearButton = document.querySelector(".clear-button");
const colorPicker = document.querySelector("#color-picker");
let marker = colorPicker.value;

// Display an initial 16 x 16 grid
for (i=1; i<=256; i++){
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    gridContainer.append(gridSquare);
    gridSquare.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = marker;
    });
};

// Change Marker Color Button
colorPicker.addEventListener("input", (e) => {
    marker = e.target.value;
});

// Clear Button - must wait for initial DOM to load before we can select the squares
document.addEventListener("DOMContentLoaded", () => {
    clearButton.addEventListener("click", () => {
        const squares = document.querySelectorAll(".square");
        squares.forEach(square => square.style.backgroundColor = "#cedfd9")
    });
});

// Change Pixelation Button
pixelButton.addEventListener("click", () => {
    let gridSize = Number(prompt("How many squares per side would you like your grid to have? Must be a number 1 - 100"));
    makeAGrid(gridSize);
});

function makeAGrid(gridSize){
    if (gridSize > 100 || gridSize < 1) {
        alert("Please enter a number between 1 - 100.");
    } else if (isNaN(gridSize)) {
        alert("Please enter a number between 1 - 100.");
    } else {
        gridContainer.innerHTML = "";
        let gridCondition = gridSize * gridSize;
        let squareWidth = ((1 / gridSize) * 100).toFixed(2) + "%";
        let squarePadBot = squareWidth;
        for (i=1; i<=gridCondition; i++){
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("square");
            gridSquare.style.width = squareWidth;
            gridSquare.style.paddingBottom = squarePadBot;
            gridContainer.append(gridSquare);
            gridSquare.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = marker;
            });
        };
    };
};

