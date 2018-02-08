'use strict'

const game = {
  user: 'user_id',
  gameID: 0,
  gameCells: ['', '', '', '', '', '', '', '', ''],
  inProgress: true,
  playerX: {
    userID: 0,
    userEmail: 'temp@temp.com'
  }
}

let currentPlayer = 'X'

const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8] // index represents a location on the gameboard. not sure I need it?

const switchTurn = function (player) {
  if (player === 'X') {
    currentPlayer = 'O'
  } else if (player === 'O') {
    currentPlayer = 'X'
  }
}

// check if the position has been played
const checkSpace = function (boardPosition) {
  const location = parseInt(boardPosition)
  if (game.gameCells[location] !== '') {
    console.log('Space has already been played, please select a different spot')
  }
}

const playerXGo = function (boardPosition, callback) {
  const location = parseInt(boardPosition)
  callback(boardPosition)
  game.gameCells[location] = 'X'
}

const playerOGo = function (boardPosition, callback) {
  const location = parseInt(boardPosition)
  callback(boardPosition)
  game.gameCells[location] = 'O'
}

const checkWinner = function (gameCells) {
  let count = 0
  //  logic to check if enough moves have been played
  for (let i = 0; i > gameCells.legnth; i++) {
    if (gameCells[i] === 'X' || gameCells[i] === 'O') {
      count++
    }
  }
<<<<<<< HEAD
  if (count <= 4) {
    console.log('not enough turns have been played to determine a winner')
=======
  if (count < 4) {
    console.log('not enough turns have been played to determine a winner')
    return
>>>>>>> UI
  }

  // logic to check if a winning combination is played swtich? nested if?

  if (gameCells[0] !== '' && gameCells[0] === gameCells[3] && gameCells[3] === gameCells[6]) {
<<<<<<< HEAD
    return gameCells[0] + ' is the winner'
  } else if (gameCells[1] !== '' && gameCells[1] === gameCells[4] && gameCells[4] === gameCells[7]) {
    return gameCells[1] + ' is the winner'
  } else if (gameCells[2] !== '' && gameCells[2] === gameCells[5] && gameCells[5] === gameCells[8]) {
    return gameCells[2] + ' is the winner'
  } else if (gameCells[0] !== '' && gameCells[0] === gameCells[1] && gameCells[1] === gameCells[2]) {
    return gameCells[0] + ' is the winner'
  } else if (gameCells[3] !== '' && gameCells[3] === gameCells[4] && gameCells[4] === gameCells[5]) {
    return gameCells[3] + ' is the winner'
  } else if (gameCells[6] !== '' && gameCells[6] === gameCells[7] && gameCells[7] === gameCells[8]) {
    return gameCells[6] + ' is the winner'
  } else if (gameCells[0] !== '' && gameCells[0] === gameCells[4] && gameCells[4] === gameCells[8]) {
    return gameCells[0] + ' is the winner'
  } else if (gameCells[2] !== '' && gameCells[2] === gameCells[4] && gameCells[4] === gameCells[6]) {
=======
    console.log('1st if')
    return gameCells[0] + ' is the winner'
  } else if (gameCells[1] !== '' && gameCells[1] === gameCells[4] && gameCells[4] === gameCells[7]) {
    console.log('2nd if')
    return gameCells[1] + ' is the winner'
  } else if (gameCells[2] !== '' && gameCells[2] === gameCells[5] && gameCells[5] === gameCells[8]) {
    console.log('3rd if')
    return gameCells[2] + ' is the winner'
  } else if (gameCells[0] !== '' && gameCells[0] === gameCells[1] && gameCells[1] === gameCells[2]) {
    console.log('4th if')
    return gameCells[0] + ' is the winner'
  } else if (gameCells[3] !== '' && gameCells[3] === gameCells[4] && gameCells[4] === gameCells[5]) {
    console.log('5th if')
    return gameCells[3] + ' is the winner'
  } else if (gameCells[6] !== '' && gameCells[6] === gameCells[7] && gameCells[7] === gameCells[8]) {
    console.log('6th if')
    return gameCells[6] + ' is the winner'
  } else if (gameCells[0] !== '' && gameCells[0] === gameCells[4] && gameCells[4] === gameCells[8]) {
    console.log('7th if')
    return gameCells[0] + ' is the winner'
  } else if (gameCells[2] !== '' && gameCells[2] === gameCells[4] && gameCells[4] === gameCells[6]) {
    console.log('8th if')
>>>>>>> UI
    return gameCells[2] + ' is the winner'
  }
}

module.exports = {
  playerXGo,
  playerOGo,
<<<<<<< HEAD
  checkSpace,
  switchTurn,
  checkWinner
}
=======
  checkSpace
}


// checkWinner(['X','X','X','O','O'])
// checkWinner(['X','X','X','O'])
>>>>>>> UI
