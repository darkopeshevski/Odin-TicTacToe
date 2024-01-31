

function Player(name, symbol, result) {
  return { name, symbol, result }
};


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

  const firstPlayer = document.querySelector('#first-player-name');
  const secondPLayer = document.querySelector('#second-player-name');

  let cubeFilledCounter = 0;
  const gameBoard = Gameboard();
  const playerOne = Player('', 'X', 0);
  const playerTwo = Player('', '0', 0);
  const whosTurn = document.querySelector('.turn');
  const newGameButton = document.querySelector('.new');
  const restartGameButton = document.querySelector('.restart');
  const inputNamesDiv = document.querySelector('.names');
  const startGameButton = document.querySelector('.start-game');
  let firstResult = document.querySelector('.first-result');
  let secondResult = document.querySelector('.second-result');

  let currentPLayer = playerOne;
  let switcher;


  // Clicking the Start Game button and performing the starting logic.
  newGameButton.addEventListener('click', function() {
    
    inputNamesDiv.showModal();
    inputNamesDiv.style.visibility = 'visible';

    playerOne.name = "";
    playerTwo.name = "";
    deleteBoard();
    
  });

  startGameButton.addEventListener('click', function() {
    playerOne.result = 0;
    playerTwo.result = 0;
    checkPLayerInputs(); // Populating playerOne & two.names properties here.
    firstResult.textContent = `${playerOne.name} : ${playerOne.result}`;
    secondResult.textContent = `${playerTwo.name} : ${playerTwo.result}`;
    if (checkBeforeGameStarts() === true) {
    newGameButton.disabled = true;
    inputNamesDiv.close();
    inputNamesDiv.style.visibility = 'hidden';
    switcher = true;
    }
  });

  restartGameButton.addEventListener('click', function() {
    deleteBoard();
    switcher = true;
    cubeFilledCounter = 0;
  });

  const printWhosTurnItIs = () => {
    whosTurn.textContent = `It's ${currentPLayer.name}'s turn!`;
  };
  
  const switchPlayer = () => {
    if (currentPLayer == playerOne) {
      currentPLayer = playerTwo;
      printWhosTurnItIs();
    }
    else {
      currentPLayer = playerOne;
      printWhosTurnItIs();
    }
  };

  // The main logic ic called and organized here.
  const playTurn = () => {
    const allSquares = document.querySelectorAll('.cube');
    allSquares.forEach(cube => {
      cube.addEventListener('click', function(event) {

        if (checkBeforeGameStarts() === true && switcher === true) {
          let row = event.target.dataset.row;
          let column = event.target.dataset.column;
          whosTurn.textContent = `It's ${currentPLayer.name}'s turn!`;
          
          // Updating the board data model, but checking first if the field is empty.
          if (gameBoard.getBoard()[row][column] !== playerOne.symbol && gameBoard.getBoard()[row][column] !== playerTwo.symbol) {

            // Updating the data model first.
            gameBoard.getBoard()[row][column] = currentPLayer.symbol;

            // Updating the DOM-UI according to the data model.
            gameBoard.connectDataToDom();
            
            // Player switch.
            switchPlayer();

            checkWinner(); // Updating the whosTurn text content.
            
            cubeFilledCounter++;
            checkTieGame();
            endGame();
            
          }

          else {
          }
        }
        else  {
          whosTurn.textContent = `Please press the "New Game" or the "Restart Game" button!`;
        }
      })
    })
  };

  const checkWinner = () => {
    // FIRST GROUP
    if (gameBoard.getBoard()[0][0] == 'X' && gameBoard.getBoard()[0][1] == 'X' && gameBoard.getBoard()[0][2] == 'X') {
      whosTurn.textContent = `${playerOne.name} has won!`;
    }
    else if (gameBoard.getBoard()[0][0] == '0' && gameBoard.getBoard()[0][1] == '0' && gameBoard.getBoard()[0][2] == '0') {
      whosTurn.textContent = `${playerTwo.name} has won!`;
    }
    else if (gameBoard.getBoard()[1][0] == 'X' && gameBoard.getBoard()[1][1] == 'X' && gameBoard.getBoard()[1][2] == 'X') {
      whosTurn.textContent = `${playerOne.name} has won!`;
    }
    else if (gameBoard.getBoard()[1][0] == '0' && gameBoard.getBoard()[1][1] == '0' && gameBoard.getBoard()[1][2] == '0') {
      whosTurn.textContent = `${playerTwo.name} has won!`;
    }
    else if (gameBoard.getBoard()[0][2] == 'X' && gameBoard.getBoard()[1][2] == 'X' && gameBoard.getBoard()[2][2] == 'X') {
      whosTurn.textContent = `${playerOne.name} has won!`;
    }
    else if (gameBoard.getBoard()[2][0] == '0' && gameBoard.getBoard()[2][1] == '0' && gameBoard.getBoard()[2][2] == '0') {
      whosTurn.textContent = `${playerTwo.name} has won!`;
    }
    
    // SECOND GROUP
    else if (gameBoard.getBoard()[0][0] == 'X' && gameBoard.getBoard()[1][0] == 'X' && gameBoard.getBoard()[2][0] == 'X') {
      whosTurn.textContent = `${playerOne.name} has won!`;
    }
    else if (gameBoard.getBoard()[0][0] == '0' && gameBoard.getBoard()[1][0] == '0' && gameBoard.getBoard()[2][0] == '0') {
      whosTurn.textContent = `${playerTwo.name} has won!`;
    }
    else if (gameBoard.getBoard()[0][1] == 'X' && gameBoard.getBoard()[1][1] == 'X' && gameBoard.getBoard()[2][1] == 'X') {
      whosTurn.textContent = `${playerOne.name} has won!`;
    }
    else if (gameBoard.getBoard()[0][1] == '0' && gameBoard.getBoard()[1][1] == '0' && gameBoard.getBoard()[2][1] == '0') {
      whosTurn.textContent = `${playerTwo.name} has won!`;
    }
    else if (gameBoard.getBoard()[0][2] == 'X' && gameBoard.getBoard()[1][2] == 'X' && gameBoard.getBoard()[2][2] == 'X') {
      whosTurn.textContent = `${playerOne.name} has won!`;
    }
    else if  (gameBoard.getBoard()[0][2] == '0' && gameBoard.getBoard()[1][2] == '0' && gameBoard.getBoard()[2][2] == '0') {
      whosTurn.textContent = `${playerTwo.name} has won!`;
    }

    // THIRD GROUP
    else if (gameBoard.getBoard()[0][0] == 'X' && gameBoard.getBoard()[1][1] == 'X' && gameBoard.getBoard()[2][2] == 'X') {
      whosTurn.textContent = `${playerOne.name} has won!`;
    }
    else if (gameBoard.getBoard()[0][0] == '0' && gameBoard.getBoard()[1][1] == '0' && gameBoard.getBoard()[2][2] == '0') {
      whosTurn.textContent = `${playerTwo.name} has won!`;
    }
    else if (gameBoard.getBoard()[0][2] == 'X' && gameBoard.getBoard()[1][1] == 'X' && gameBoard.getBoard()[2][0] == 'X') {
      whosTurn.textContent = `${playerOne.name} has won!`;
    }
    else if (gameBoard.getBoard()[0][2] == '0' && gameBoard.getBoard()[1][1] == '0' && gameBoard.getBoard()[2][0] == '0') {
      whosTurn.textContent = `${playerTwo.name} has won!`;
    }
  };

  const checkPLayerInputs = () => {
    let first = firstPlayer.value;
    let second = secondPLayer.value;
    console.log('suck my dick');
    

    if (first === "" || first === "Please enter your name.") {
      firstPlayer.value = "Please enter your name.";
      firstPlayer.style.backgroundColor = `rgb(255, 125, 125)`;
    }
    
    if (second === "" || second === "Please enter your name.") {
      secondPLayer.value = "Please enter your name.";
      secondPLayer.style.backgroundColor = `rgb(255, 125, 125)`;
    }

    if (first && second) {
      if (first !== "" && first !== "Please enter your name.") {
        playerOne.name = firstPlayer.value;
      }
  
      if (second !== "" && second !== "Please enter your name.") {
        playerTwo.name = secondPLayer.value;
      }
    }
  };

  const changeInputColor = () => {
    firstPlayer.addEventListener('focus', function() {
      if (firstPlayer.value === "Please enter your name.") {
        firstPlayer.value = "";
        firstPlayer.style.backgroundColor = `rgb(255, 202, 39)`;
      }
    })

    secondPLayer.addEventListener('focus', function() {
      if (secondPLayer.value === "Please enter your name.") {
        secondPLayer.value = "";
        secondPLayer.style.backgroundColor = `rgb(255, 202, 39)`;
      }
    })
  };
  
  const checkBeforeGameStarts = () => {
    if (playerOne.name !== "" && playerTwo.name !== "") {
      whosTurn.textContent = `It's ${playerOne.name}'s turn!`;
      return true;
    }
    else {
      return false;
    }
  };

  const deleteBoard = () => {
    for (let i = 0; i < gameBoard.getBoard().length; i++) {
      for (let b = 0; b < gameBoard.getBoard()[i].length; b++) {
        gameBoard.getBoard()[i][b] = "";
      }
    }
    gameBoard.connectDataToDom();
  };

  const endGame = () => {
    if (whosTurn.textContent === `${playerOne.name} has won!` || whosTurn.textContent === `${playerTwo.name} has won!`) {
      newGameButton.disabled = false;
      updateResults();
      cubeFilledCounter = 0;
      switcher = false;
    }
  };

  // Checking for a tie match.
  const checkTieGame = () => {
    if (cubeFilledCounter === 9 && (whosTurn.textContent !== `${playerOne.name} has won!` || whosTurn.textContent !== `${playerTwo.name} has won!`)) {
      whosTurn.textContent = "It is a tie match!";
      cubeFilledCounter = 0;
      switcher = false;
    }
  };

  const updateResults = () => {
    if (whosTurn.textContent === `${playerOne.name} has won!`) {
      playerOne.result++;
      firstResult.textContent = `${playerOne.name} : ${playerOne.result}`;
      console.log(`pl1 result = ${playerOne.result}`);
      
    }
    if (whosTurn.textContent === `${playerTwo.name} has won!`) {
      playerTwo.result++;
      secondResult.textContent = `${playerTwo.name} : ${playerTwo.result}`;
      console.log(`pl2 result = ${playerTwo.result}`);

    }
  };

  // This function is called here because it is listening to the "focus" event all the time.
  changeInputColor();

  return { playTurn };
};

let gameOne = Game();
gameOne.playTurn();



// da napravam funkcija kade sto nema da moze da se stavi nov simbol vo zafateno pole!


// definitivno input fields mora da idat vo modal. Znaci u html redosledot treba da gi stiliziram rezults divot, poso toj ke bide staticen.  pa posle input fieldsot da ide vo dialog pop-up, so "OK" kopce sto ke go zatvora pop-upot. Seedno koj po red kje odi vo html-ot.