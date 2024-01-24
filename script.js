

function Player(name, symbol) {
  
  return { name, symbol }
}


function Gameboard() {
  const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  const getBoard = () => board;

  // Updating the DOM cubes based on what's in the data model (the board array).
  const connectDataToDom = () => {
    const allCubes = document.querySelectorAll('.cube');
    let rowIterator = 0;
    let columnIterator = 0;

    allCubes.forEach(cube => {
      cube.textContent = board[rowIterator][columnIterator];
      columnIterator++;

      if (columnIterator === 3) {
        rowIterator++;
        columnIterator = 0;
      }
    })
  };

  return { getBoard, connectDataToDom };
};

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
  };


  const playTurn = () => {
    const allSquares = document.querySelectorAll('.cube');
    allSquares.forEach(cube => {
      cube.addEventListener('click', function(event) {
        let row = event.target.dataset.row;
        let column = event.target.dataset.column;
        
        // Updating the board data model.
        gameBoard.getBoard()[row][column] = currentPLayer.symbol;

        // Updating the DOM-UI.
        gameBoard.connectDataToDom();
        
        switchPlayer();
        checkWinner();
  
      })
    })
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
  };

  return { playTurn };
  
};

let gameOne = Game();
gameOne.playTurn();



// Zaglaviv na toa kako da go spojam data modelot (boardot) so Dom-ot. Na 28-ma linija imam funkcija so koja se updejtuva DOM-ot spored data-arrayot, ama fintata e so ne znam kako da go updejtuvam data-arrayot spored klikovi na DOM-ot.

// Na primer mozam da napravam funkcija u koja sto ke go updatuvam domot spored klikovi na particular .cubes, ama pa kako spored toa da go updejtnam data-arrayot.

// Druga opcija mi e da nemam uopste data-array, samo so klikovi da go updejtuvam DOM-ot, i da gi smenam checkForWin() i checkWinner() funkciite, da proveruvaat direktno od DOM-ot sto ima vo .cubes elementite, so .textContent.


//!! OVA MI IZGLEA NA LEGIT RESENIE! Mozam da probam da go updatnam data-arrayot so klik na elementite od DOMOT, na primer mozam da im dadam na .cube html elementite po 2 data keys, u koja kolona i u koj row se, pa spored toa na board[data-key][data-key] da im stavam simbol.