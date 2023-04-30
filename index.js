//Our variables:
const colors = {
    '0': 'white',
    '1': 'red',
    '-1': 'blue'
}

let cell1 = document.getElementById('cell1');
let cell2 = document.getElementById('cell2');
let cell3 = document.getElementById('cell3');
let cell4 = document.getElementById('cell4');
let cell5 = document.getElementById('cell5');
let cell6 = document.getElementById('cell6');
let cell7 = document.getElementById('cell7');
let cell8 = document.getElementById('cell8');
let cell9 = document.getElementById('cell9');

let cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];

let turn = 1;

// Declare clickedCells globally
let clickedCells = [];

//Our function code:

function takeTurn() {
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', function(event) {
        if (clickedCells.includes(cells[i]) && cells[i].style.backgroundColor !== colors[0]) {
          alert("Already clicked!");
        } else {
          if (turn === 1) {
            cells[i].style.backgroundColor = colors[1];
            turn = -1;
            document.querySelector('h2').innerHTML = "Blue, you're up!";
          } else {
            cells[i].style.backgroundColor = colors[-1];
            turn = 1;
            document.querySelector('h2').innerHTML = "Red, you're up!";
          }
          clickedCells.push(cells[i]);
          winnerIs();
        }
      });
    }
}

takeTurn(turn);

//This function will return the board to its default state.

function resetBoard() {
    let resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', function(event) {
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = colors[0];
        }
        turn = 1;
        clickedCells = [];
        document.querySelector('h1').style.color = "black";
        document.querySelector('h1').innerHTML = "Welcome to Tic Tac Toe!"
        document.querySelector('h2').innerHTML = "Red, you're up!";
    })
}

resetBoard();

//This function will check for a winner and display the board accordingly.

function winnerIs() {
    let winningCombos = [    
    [cells[0], cells[1], cells[2]],
      [cells[3], cells[4], cells[5]],
      [cells[6], cells[7], cells[8]],
      [cells[0], cells[3], cells[6]],
      [cells[1], cells[4], cells[7]],
      [cells[2], cells[5], cells[8]],
      [cells[0], cells[4], cells[8]],
      [cells[2], cells[4], cells[6]]
    ];
  
    let hasWinner = false;
  
    for (let i = 0; i < winningCombos.length; i++) {
      let combo = winningCombos[i];
      if (combo[0].style.backgroundColor === colors[1] && combo[1].style.backgroundColor === colors[1] && combo[2].style.backgroundColor === colors[1]) {
        hasWinner = true;
        document.querySelector('h2').innerHTML = "";
        document.querySelector('h1').style.color = "red";
        document.querySelector('h1').innerHTML = "Red wins! Click to reset.";
        break;
      } else if (combo[0].style.backgroundColor === colors[-1] && combo[1].style.backgroundColor === colors[-1] && combo[2].style.backgroundColor === colors[-1]) {
        hasWinner = true;
        document.querySelector('h2').innerHTML = "";
        document.querySelector('h1').style.color = "blue";
        document.querySelector('h1').innerHTML = "Blue wins! Click to reset.";
        break;
      }
    }
  
    if (!hasWinner && clickedCells.length === 9) {
      document.querySelector('h2').innerHTML = "";
      document.querySelector('h1').style.color = "black";
      document.querySelector('h1').innerHTML = "It's a tie! Click to reset.";
    }
}

winnerIs();








