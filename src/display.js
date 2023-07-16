function populateDisplay() {
    let bodyElem = document.querySelector("body");

    let chessBoard = document.createElement("div");
    chessBoard.style.display = "grid";
    chessBoard.style.gridTemplateRows = "repeat(8, 1fr)";
    chessBoard.style.gridTemplateColumns = "repeat(8, 1fr)";
    
    bodyElem.appendChild(chessBoard);
}

export {populateDisplay};