function populateDisplay() {
    let bodyElem = document.querySelector("body");

    let chessBoard = document.createElement("div");
    chessBoard.classList.add("chessboard");
    chessBoard.style.display = "grid";
    chessBoard.style.gridTemplateRows = "repeat(8, 1fr)";
    chessBoard.style.gridTemplateColumns = "repeat(8, 1fr)";
    chessBoard.style.border = "2px solid black";
    chessBoard.style.width = "40rem";
    chessBoard.style.height = "40rem";

    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add(`${i}${j}`);
            if (Math.abs(i - j) % 2 === 0) 
                newDiv.style.backgroundColor = "white";
            else
                newDiv.style.backgroundColor = "black";
            newDiv.style.gridRow = `${i} / ${i+1}`;
            newDiv.style.gridColumn = `${j} / ${j+1}`;
            newDiv.style.display = "flex";
            newDiv.style.justifyContent = "center";
            newDiv.style.alignItems = "center";
            chessBoard.appendChild(newDiv);
        }
    }
    
    bodyElem.appendChild(chessBoard);
}

export {populateDisplay};