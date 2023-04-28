//Board state at start of game

let boardState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
    ];



//win states:

let condition1;
let condition2;
let condition3; 
let condition4; 
let condition5; 
let condition6; 
let condition7; 
let condition8; 

//condition 1: top row
    if (boardState[0][0] === boardState[0][1] && boardState[0][0] === boardState[0][2]) {
        condition1 = true;
    }
//condition 2: middle row
    if (boardState[1][0] === boardState[1][1] && boardState[1][0] === boardState[1][2]) {
        condition2 = true;
    }
//condition 3: bottom row
    if (boardState[2][0] === boardState[2][1] && boardState[2][0] === boardState[2][2]) {
        condition3 = true;
    }
 //condition 4: Right Column
    if (boardState[0][2] === boardState[1][2] && boardState[0][2] === boardState[2][2]) {
        condition4 = true;
    }
//condition 5: Middle Column
    if (boardState[0][1] === boardState[1][1] && boardState[0][1] === boardState[2][1]) {
        condition5 = true;
    }
//condition 6: Left Column
    if (boardState[0][0] === boardState[1][0] && boardState[0][0] === boardState[2][0]) {
        condition6 = true;
    }
//condition 7: Diagonal 1 (top left to bottom right)
    if (boardState[0][0] === boardState[1][1] && boardState[0][0] === boardState[2][2]) {
        condition7 = true;
    }
//condition 8: Diagonal 2 (top right to bottom left)
    if (boardState[0][2] === boardState[1][1] && boardState[0][2] === boardState[2][0]) {
        condition8 = true;
    }

console.log("you win");

//how to create 2d matrix out of a 1-d array;
//if id % 3 === 0, row ends
//each div corresponds to number in 2-d array


//click function

let board = document.getElementById("board");
let buttonClicked;

let handleClick = board.addEventListener("click", function(event) {
    buttonClicked = event.target.id;
    console.log(buttonClicked);
    boardState[0,0] = "X";
    console.log(boardState)
});

console.log(buttonClicked);

// button.addEventListener("click", clickFunction);


function findPlacement(num, arr) {
const flatArr = arr.flat();
const index = flatArr.indexOf(num);
const row = Math.floor(index / 3);
const col = index % 3;
return [row, col];
}