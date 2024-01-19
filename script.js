

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

  function printBoardVertically() {
    console.log(`${board[0]}\n${board[1]}\n${board[2]}`);
  }

  return { getBoard, setCell, printBoardVertically};

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



  let kur = 10;
  while (kur > 0) {
    playTurn();
    kur--;
  }

}

Game();