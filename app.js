// accessing elements from html file
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//assigning boolean value
let turnO = true;

//array of winning patterns
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
//functions of showing clicked positions by player
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
// function to disable boxes after 1 player has won
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

//function to enable boxes after reset
const enableBoxes = () => {
  for (let box of boxes) {
    box.enable = true;
    box.innerText = "";
  }
};

//show Winner after game is over
const showWinner = (winner) => {
  msg.innerText = `Congratulations, ${winner} is Winner `;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

//accessing and displaying winning patterns from array
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

//buttons event
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
