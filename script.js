const gridContainer = document.querySelector(".grid-container");
const pixelButton = document.querySelector(".pixel-button");

for (i=1; i<=256; i++){
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    gridContainer.append(gridSquare);
};

pixelButton.addEventListener("click", function() {
    let gridSize = Number(prompt("How many squares per side would you like your grid to have? Must be a number 1 - 100"));
    makeAGrid(gridSize);
});

function makeAGrid(gridSize){
    gridContainer.innerHTML = "";
    if (gridSize > 100 || gridSize < 1) {
        alert("Please enter a number between 1 - 100.");
    } else if (isNaN(gridSize)) {
        alert("Please enter a number between 1 - 100.");
    } else {
        let gridCondition = gridSize * gridSize;
        let squareWidth = ((1 / gridSize) * 100).toFixed(2) + "%";
        let squarePadBot = squareWidth;
        for (i=1; i<=gridCondition; i++){
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("square");
            gridSquare.style.width = squareWidth;
            gridSquare.style.paddingBottom = squarePadBot;
            gridContainer.append(gridSquare);
        };
    }
};
