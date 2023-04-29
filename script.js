//Board state at start of game

let boardState = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];


//how to create 2d matrix out of a 1-d array;
//if id % 3 === 0, row ends
//each div corresponds to number in 2-d array


//click function

let board = document.getElementById("board");
let playerTurn = 0;
let input = "X"

let handleClick = board.addEventListener("click", function(event) {
        let buttonClicked = parseInt(event.target.id);
        console.log(buttonClicked);
        let row;
        let col;
        try{
            row = findPlacement(buttonClicked,boardState)[0];
            col = findPlacement(buttonClicked,boardState)[1];
            if(row + col !== -2){
                boardState[row][col] = input;
                document.getElementById(`${buttonClicked}`).innerText = input;
                playerTurn += 1;
                input = playerTurn % 2 === 0 ? "X" : "O";
                document.getElementById("turn").innerHTML = `TURN: ${input}`
            }
            if (checkForWin(boardState, input)){
                alert("game is really fucking over dude")
                resetBoard();
                playerTurn = 0;
                return;
            };
            if(!boardIsFilled(boardState,input)){
                alert("its FUCKIGN DRAWW YOU IDIOT")
                resetBoard();
                playerTurn = 0;
                return;
            }
        }catch (err) {
            console.log(err)
        }
        
    
    // console.log(findPlacement(buttonClicked,boardState));
    console.log(boardState);
});

let resetButton = document.getElementById("reset")
resetButton.addEventListener("click", function(event){
    if (event.target.id === "reset") {
        // Reset the board state and clear all buttons
    boardState = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.innerHTML = null;
    });
    // Reset the player turn counter
    playerTurn = 0;
    return;
    }
})

function resetBoard(){
    boardState = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.innerHTML = null;
    });
    // Reset the player turn counter
    playerTurn = 0;
    return;
}
// button.addEventListener("click", clickFunction);

//this function is not my doing lmao, stole from internet to turn 2d array into 1d array
function findPlacement(num, arr) {

const flatArr = arr.flat();//does that
const index = flatArr.indexOf(num);//finds index of number in 1d array
const row = Math.floor(index / 3);//finds row; if 
const col = index % 3;//finds column
    if (index === -1 && Number.isInteger(num)){
        alert("button already clicked")
    }
return [row,col];
}

//is the game over?
function boardIsFilled(arr, input) {
    const flattArr = arr.flat(); // turns big 2d boy array into little small lithe array [1,2,3,4,5,6,7,8,9]
    for (let i = 0; i < flattArr.length; i++) { //checks to see if there are any integers left in the array
        if (Number.isInteger(flattArr[i]) && checkForWin(boardState, input) === false) {
          return true;//returns true if any integers lefr
        }
      }
      return false;
}   

function checkForWin(board, currentPlayer) {
    // Check rows for a win
    for (let row = 0; row < 3; row++) {
      if (board[row][0] === currentPlayer && board[row][1] === currentPlayer && board[row][2] === currentPlayer) {
        return true;
      }
    }
  
    // Check columns for a win
    for (let col = 0; col < 3; col++) {
      if (board[0][col] === currentPlayer && board[1][col] === currentPlayer && board[2][col] === currentPlayer) {
        return true;
      }
    }
  
    // Check diagonals for a win
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
      return true;
    }
  
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
      return true;
    }
  
    // If no win condition is met, return false
    return false;
  }
