

function Player(name, symbol) {
  
  return { name, symbol }
}


function Gameboard() {
  const board = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']
  ];

  const getBoard = () => board;

  const setCell = (row, col, value) => {
    if (row >= 0 && row < 3 && col >= 0 && col < 3 && (board[row][col] == '_' || board[row][col] === 'X' || board[row][col] === '0')) {
      board[row][col] = value;
      return true;
    } else {
      console.log('false');
      return false;
      
    }
  };

  const printBoardVertically = () => {
  console.log(`${board[0]}\n${board[1]}\n${board[2]}`);
  };

  const checkForWin = () => {
    // HORIZONTAL ROW CHECK
    if ((board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') || (board[0][0] == '0' && board[0][1] == '0' && board[0][2] == '0')) {
      return true;
    }
    else if ((board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') || (board[1][0] == '0' && board[1][1] == '0' && board[1][2] == '0')) {
      return true;
    }
    else if ((board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') || (board[2][0] == '0' && board[2][1] == '0' && board[2][2] == '0')) {
      return true;
    }

    // VERTICAL ROW CHECK
    else if ((board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') || (board[0][0] == '0' && board[1][0] == '0' && board[2][0] == '0')) {
      return true;
    }
    else if ((board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') || (board[0][1] == '0' && board[1][1] == '0' && board[2][1] == '0')) {
      return true;
    }
    else if ((board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') || (board[0][2] == '0' && board[1][2] == '0' && board[2][2] == '0')) {
      return true;
    }

    // DIAGONAL ROW CHECK
    else if ((board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') || (board[0][0] == '0' && board[1][1] == '0' && board[2][2] == '0')) {
      return true;
    }
    else if ((board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X') || (board[0][2] == '0' && board[1][1] == '0' && board[2][0] == '0')) {
      return true;
    }

    else {
      return false;
    }

  };

  return { getBoard, setCell, printBoardVertically, checkForWin };

}

function Game() {

  const gameBoard = Gameboard();
  const playerOne = Player('dare', 'X');
  const playerTwo = Player('Miki', '0');
  let currentPLayer = playerOne;

  
  const switchPlayer = () => {
    if (currentPLayer == playerOne) {
      currentPLayer = playerTwo;
    }
    else {
      currentPLayer = playerOne;
    }
  }

  const playTurn = () => {
    let rowAnswer = parseInt(prompt('Please choose which row'));
    let colAnswer = parseInt(prompt('Please choose which column'));

    gameBoard.setCell(rowAnswer, colAnswer, currentPLayer.symbol);

    console.log(currentPLayer);
    switchPlayer();

    gameBoard.printBoardVertically();
};

  const checkWinner = () => {
    // FIRST GROUP
    if (gameBoard.getBoard()[0][0] == 'X' && gameBoard.getBoard()[0][1] == 'X' && gameBoard.getBoard()[0][2] == 'X') {
      console.log(`${playerOne.name} has won!`);
    }
    else if (gameBoard.getBoard()[0][0] == '0' && gameBoard.getBoard()[0][1] == '0' && gameBoard.getBoard()[0][2] == '0') {
      console.log(`${playerTwo.name} has won!`);
    }
    else if (gameBoard.getBoard()[1][0] == 'X' && gameBoard.getBoard()[1][1] == 'X' && gameBoard.getBoard()[1][2] == 'X') {
      console.log(`${playerOne.name} has won!`);
    }
    else if (gameBoard.getBoard()[1][0] == '0' && gameBoard.getBoard()[1][1] == '0' && gameBoard.getBoard()[1][2] == '0') {
      console.log(`${playerTwo.name} has won!`);
    }
    else if (gameBoard.getBoard()[0][2] == 'X' && gameBoard.getBoard()[1][2] == 'X' && gameBoard.getBoard()[2][2] == 'X') {
      console.log(`${playerOne.name} has won!`);
    }
    else if (gameBoard.getBoard()[2][0] == '0' && gameBoard.getBoard()[2][1] == '0' && gameBoard.getBoard()[2][2] == '0') {
      console.log(`${playerTwo.name} has won!`);
    }
    
    // SECOND GROUP
    else if (gameBoard.getBoard()[0][0] == 'X' && gameBoard.getBoard()[1][0] == 'X' && gameBoard.getBoard()[2][0] == 'X') {
      console.log(`${playerOne.name} has won!`);
    }
    else if (gameBoard.getBoard()[0][0] == '0' && gameBoard.getBoard()[1][0] == '0' && gameBoard.getBoard()[2][0] == '0') {
      console.log(`${playerTwo.name} has won!`);
    }
    else if (gameBoard.getBoard()[0][1] == 'X' && gameBoard.getBoard()[1][1] == 'X' && gameBoard.getBoard()[2][1] == 'X') {
      console.log(`${playerOne.name} has won!`);
    }
    else if (gameBoard.getBoard()[0][1] == '0' && gameBoard.getBoard()[1][1] == '0' && gameBoard.getBoard()[2][1] == '0') {
      console.log(`${playerTwo.name} has won!`);
    }
    else if (gameBoard.getBoard()[0][2] == 'X' && gameBoard.getBoard()[1][2] == 'X' && gameBoard.getBoard()[2][2] == 'X') {
      console.log(`${playerOne.name} has won!`);
    }
    else if  (gameBoard.getBoard()[0][2] == '0' && gameBoard.getBoard()[1][2] == '0' && gameBoard.getBoard()[2][2] == '0') {
      console.log(`${playerTwo.name} has won!`);
    }

    // THIRD GROUP
    else if (gameBoard.getBoard()[0][0] == 'X' && gameBoard.getBoard()[1][1] == 'X' && gameBoard.getBoard()[2][2] == 'X') {
      console.log(`${playerOne.name} has won!`);
    }
    else if (gameBoard.getBoard()[0][0] == '0' && gameBoard.getBoard()[1][1] == '0' && gameBoard.getBoard()[2][2] == '0') {
      console.log(`${playerTwo.name} has won!`);
    }
    else if (gameBoard.getBoard()[0][2] == 'X' && gameBoard.getBoard()[1][1] == 'X' && gameBoard.getBoard()[2][0] == 'X') {
      console.log(`${playerOne.name} has won!`);
    }
    else if (gameBoard.getBoard()[0][2] == '0' && gameBoard.getBoard()[1][1] == '0' && gameBoard.getBoard()[2][0] == '0') {
      console.log(`${playerTwo.name} has won!`);
    }
  }


  while (gameBoard.checkForWin() == false) {
    playTurn();
    console.log(gameBoard.checkForWin());

    if (gameBoard.checkForWin() == true) {
      checkWinner();
    }
    
  }

  
}

Game();