

function Player(name, symbol) {
  return { name, symbol }
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

  const gameBoard = Gameboard();
  const playerOne = Player('', 'X');
  const playerTwo = Player('', '0');
  const whosTurn = document.querySelector('.turn');
  let currentPLayer = playerOne;
  const startGameButton = document.querySelector('.start');
  const restartGameButton = document.querySelector('.restart');


  startGameButton.addEventListener('click', function() {
    checkPLayerInputs();
  })

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


  const playTurn = () => {
    const allSquares = document.querySelectorAll('.cube');
    allSquares.forEach(cube => {
      cube.addEventListener('click', function(event) {

        if (checkBeforeGameStarts() === true) {
          console.log('whaaat');
          let row = event.target.dataset.row;
          let column = event.target.dataset.column;
          whosTurn.textContent = `It's ${currentPLayer.name}'s turn!`;
          
          // Updating the board data model.
          gameBoard.getBoard()[row][column] = currentPLayer.symbol;

          // Updating the DOM-UI.
          gameBoard.connectDataToDom();
          
          switchPlayer();
          checkWinner();
        }
        else  {
          console.log('wHAAAAAAAAt');
        }
        
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

  const checkPLayerInputs = () => {
    let first = firstPlayer.value;
    let second = secondPLayer.value;
    

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
        console.log('kurac1');
      }
  
      if (second !== "" && second !== "Please enter your name.") {
        playerTwo.name = secondPLayer.value;
        console.log('kurac2');
      }
    }
  };

  const changeInputColor = () => {
    firstPlayer.addEventListener('focus', function() {
      if (firstPlayer.value === "Please enter your name.") {
        firstPlayer.value = "";
        firstPlayer.style.backgroundColor = `rgb(255, 255, 255)`;
      }
    })

    secondPLayer.addEventListener('focus', function() {
      if (secondPLayer.value === "Please enter your name.") {
        secondPLayer.value = "";
        secondPLayer.style.backgroundColor = `rgb(255, 255, 255)`;
      }
    })
  };
  
  const checkBeforeGameStarts = () => {
    if (playerOne.name !== "" && playerTwo.name !== "") {
      console.log('wtf');
      return true;
    }
    else {
      console.log('wtf2');
      return false;
    }
  };

  changeInputColor();

  return { playTurn };
};

let gameOne = Game();
gameOne.playTurn();



// Zaglaviv na toa kako da go spojam data modelot (boardot) so Dom-ot. Na 28-ma linija imam funkcija so koja se updejtuva DOM-ot spored data-arrayot, ama fintata e so ne znam kako da go updejtuvam data-arrayot spored klikovi na DOM-ot.

// Na primer mozam da napravam funkcija u koja sto ke go updatuvam domot spored klikovi na particular .cubes, ama pa kako spored toa da go updejtnam data-arrayot.

// Druga opcija mi e da nemam uopste data-array, samo so klikovi da go updejtuvam DOM-ot, i da gi smenam checkForWin() i checkWinner() funkciite, da proveruvaat direktno od DOM-ot sto ima vo .cubes elementite, so .textContent.


//!! OVA MI IZGLEA NA LEGIT RESENIE! Mozam da probam da go updatnam data-arrayot so klik na elementite od DOMOT, na primer mozam da im dadam na .cube html elementite po 2 data keys, u koja kolona i u koj row se, pa spored toa na board[data-key][data-key] da im stavam simbol.



// MI OSTANA USTE DA NAPRAAM CHECK ZA DALI POSTOJAT 2 ta player NAMES. Odnosno player.names da moraat da imaat nekakvo ime vo niv, da NE smeat da se prazni, 2 te i toa! Za da moze da se dozvoli da se stava input vo polinjata.