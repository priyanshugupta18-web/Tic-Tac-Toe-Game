let boxes = document.querySelectorAll(".boxes");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let para = document.querySelector(".para");
let gameOver = false;

para.style.display = "none";
let turnX = true;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let isWinner = () => {
    if (gameOver) return true;

    for (let pattern of winPatterns) {
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;

        if (a == b && b == c && a != "") {
            gameOver = true;

            document.querySelector(".resetbtn").style.display = "none";
            document.querySelector(".mastercontainer").style.display = "none";
            document.querySelector(".newbtn").style.display = "flex";

            para.style.display = "flex";
            para.innerText = `Congratulations! Player ${a} is the Winner`;
            return true;
        }
    }
    return false;
};


let isDraw = () => {
    if (gameOver) return false;

    for (let box of boxes) {
        if (box.innerText === "") {
            return false;
        }
    }

    gameOver = true;

    document.querySelector(".resetbtn").style.display = "none";
    document.querySelector(".mastercontainer").style.display = "none";
    document.querySelector(".newbtn").style.display = "flex";

    para.style.display = "flex";
    para.innerText = "Its a draw!";
    return true;
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameOver) return;  

        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }

        box.disabled = true;

        isWinner();
        isDraw();
    });
});


resetbtn.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    turnX = true;
    gameOver = false;
    para.style.display = "none";
});


newbtn.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }

    turnX = true;
    gameOver = false;   

    document.querySelector(".resetbtn").style.display = "";
    document.querySelector(".mastercontainer").style.display = "";
    document.querySelector(".newbtn").style.display = "none";
    para.style.display = "none";
});
