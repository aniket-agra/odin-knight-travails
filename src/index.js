import { createNode } from "../graphNode";
import { populateDisplay } from "./display";
import { knightMoves } from "./travails";

knightMoves([0, 0], [1, 4]);
populateDisplay();
let start = undefined, end = undefined;
document.querySelectorAll(".chessboard > div").forEach(e => e.addEventListener("click", function (e) {
    let clicked = e.target.classList[0];
    let i = clicked[0] - 1, j = clicked[1] - 1;
    if (start === undefined) {
        start = [i - 1, j - 1];
        e.target.style.color = "grey";
        e.target.textContent = "K";
    } else {
        end = [i - 1, j - 1];
        e.target.style.color = "grey";
        e.target.textContent = "X";
    }
}));