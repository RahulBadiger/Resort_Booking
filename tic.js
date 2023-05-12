const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function(e) {
    if (e.target.textContent === '') {
      e.target.textContent = currentPlayer;
      if (currentPlayer === 'X') {
        currentPlayer = 'O';
      } else {
        currentPlayer = 'X';
      }
    }
  });
  const squares = document.querySelectorAll('.square');
const status = document.getElementById('status');
let currentPlayer = 'X';
let gameOver = false;

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function(e) {
    if (!gameOver && e.target.textContent === '') {
      e.target.textContent = currentPlayer;
      checkWin();
      checkDraw();
      if (currentPlayer === 'X') {
        currentPlayer = 'O';
        status.textContent = "Player O's turn";
      } else {
        currentPlayer = 'X';
        status.textContent = "Player X's turn";
      }
    }
  })
}

function checkWin() {
  // check rows
  for (let i = 0; i < 9; i += 3) {
    if (squares[i].textContent === currentPlayer && 
        squares[i+1].textContent === currentPlayer && 
        squares[i+2].textContent === currentPlayer) {
      gameOver = true;
      status.textContent = `Player ${currentPlayer} wins!`;
    }
  }
  
  // check columns
  for (let i = 0; i < 3; i++) {
    if (squares[i].textContent === currentPlayer && 
        squares[i+3].textContent === currentPlayer && 
        squares[i+6].textContent === currentPlayer) {
      gameOver = true;
      status.textContent = `Player ${currentPlayer} wins!`;
    }
  }
  
  // check diagonals
  if (squares[0].textContent === currentPlayer && 
     

  }}
