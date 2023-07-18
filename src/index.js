import { createNode } from "../graphNode";
import { populateDisplay } from "./display";
import { knightMoves } from "./travails";
import Knight from "../img/horse-svgrepo-com.svg";
import "./style.css";

populateDisplay();
let start = undefined, end = undefined;
let knightImg = new Image();
knightImg.src = Knight;
document.querySelectorAll(".chessboard > div").forEach(e => e.addEventListener("click", function (e) {
    let clicked = e.target.classList[0];
    let i = clicked[0] - 1, j = clicked[1] - 1;
    if (start === undefined) {
        start = [i, j];
        e.target.style.color = "grey";
        e.target.appendChild(knightImg);
    } else {
        end = [i, j];
        e.target.style.color = "grey";
        e.target.textContent = "X";
    }
}));

let startBtn = document.querySelector(".start");
let nextBtn = document.querySelector(".next");

let last;
startBtn.addEventListener("click", function (e) {
    last = knightMoves(start, end);
    let sequence = [];
    while (last !== null) {
        sequence.push(last.getValue());
        last = last.getParent();
    }

    for (let i = 1; i < sequence.length; i++) {
        setTimeout(function() {
            let selector = `div[class = "${sequence[i - 1][0] + 1}${sequence[i - 1][1] + 1}"]`;
            document.querySelector(selector).removeChild(document.querySelector(`${selector} > img`));
            selector = `div[class = "${sequence[i][0] + 1}${sequence[i][1] + 1}"]`;
            let nextDiv = document.querySelector(selector);        
            nextDiv.textContent = "";
            nextDiv.appendChild(knightImg);
        }, 400 + 2000 * (i - 1));
    }
});
// nextBtn.addEventListener("click", function (e) {
//     if (last !== null) {
//         let selector = `div[class = "${last.getValue()[0] + 1}${last.getValue()[1] + 1}"]`;
//         document.querySelector(selector).textContent = "";
//         last = last.getParent();
//         selector = `div[class = "${last.getValue()[0] + 1}${last.getValue()[1] + 1}"]`;
//         let nextDiv = document.querySelector(selector);
//         nextDiv.textContent = "K";
//         nextDiv.style.color = "grey";
//     }
    
// });