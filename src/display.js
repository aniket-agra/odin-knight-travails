function populateDisplay() {
    let bodyElem = document.querySelector("body");

    let chessBoard = document.createElement("div");
    chessBoard.classList.add("chessboard");

    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add(`${i}${j}`);
            if (Math.abs(i - j) % 2 === 0) 
                newDiv.style.backgroundColor = "white";
            else
                newDiv.style.backgroundColor = "lightgrey";
            newDiv.style.gridRow = `${i} / ${i+1}`;
            newDiv.style.gridColumn = `${j} / ${j+1}`;
            newDiv.style.display = "flex";
            newDiv.style.justifyContent = "center";
            newDiv.style.alignItems = "center";
            chessBoard.appendChild(newDiv);
        }
    }
    
    bodyElem.appendChild(chessBoard);

    let startBtn = document.createElement("button");
    startBtn.classList.add("start");
    startBtn.textContent = "Start";
    startBtn.style.margin = "2rem 0rem 0 19rem";
    bodyElem.appendChild(startBtn);

    let resetBtn = document.createElement("button");
    resetBtn.classList.add("reset");
    resetBtn.textContent = "Reset";
    resetBtn.style.margin = "2rem 2rem";
    bodyElem.appendChild(resetBtn);

    let instructions = document.createElement("div");
    instructions.classList.add("instructions");
    let title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Instructions";
    instructions.appendChild(title);
    let list = document.createElement("ol");
    for (let i = 0; i < 3; i++) {
        let item = document.createElement("li");
        switch (i) {
            case 0 : item.textContent = "To start, click on a square for initial position."; break;
            case 1 : item.textContent = "Next, click on another square for final position."; break;
            case 2 : item.textContent = "Finally, click start button to start the animation and sit back."; break;
        } 
        list.appendChild(item);
    }
    instructions.appendChild(list);
    bodyElem.appendChild(instructions);

    // let nextBtn = document.createElement("button");
    // nextBtn.classList.add("next");
    // nextBtn.textContent = "Next";
    // nextBtn.style.margin = "2rem 1rem";
    // bodyElem.appendChild(nextBtn);
}

export {populateDisplay};