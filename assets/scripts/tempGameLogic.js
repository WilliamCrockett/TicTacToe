'use strict'

const ui = require('./game/ui.js')
const events = require('./game/events.js')
const api = require('./game/api.js')
const store = require('./store.js')

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

// const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8] // index represents a location on the gameboard. not sure I need it?

const switchTurn = function (player) {
  if (player === 'X') {
    currentPlayer = 'O'
    return currentPlayer
  } else if (player === 'O') {
    currentPlayer = 'X'
    return currentPlayer
  }
}

// check if the position has been played
const checkSpace = function (boardPosition) {
  const location = parseInt(boardPosition)
  if (game.gameCells[location] !== '') {
    return true
  }
}
// plays as user x
const playerXGo = function (boardPosition) {
  const location = parseInt(boardPosition)
  game.gameCells[location] = 'X'
  ui.placeX(boardPosition)
  api.updateGame(boardPosition, 'X', false)
}
// plays as user O
const playerOGo = function (boardPosition) {
  const location = parseInt(boardPosition)
  game.gameCells[location] = 'O'
  ui.placeO(boardPosition)
  api.updateGame(boardPosition, 'O', false)
}

const tempCheck = function (gameCells) {
  if (gameCells[0] !== '' && gameCells[0] === gameCells[3] && gameCells[3] === gameCells[6]) {
    events.winner = gameCells[0]
    return events.winner
  } else if (gameCells[1] !== '' && gameCells[1] === gameCells[4] && gameCells[4] === gameCells[7]) {
    events.winner = gameCells[1]
    return events.winner
  } else if (gameCells[2] !== '' && gameCells[2] === gameCells[5] && gameCells[5] === gameCells[8]) {
    events.winner = gameCells[2]
    return events.winner
  } else if (gameCells[0] !== '' && gameCells[0] === gameCells[1] && gameCells[1] === gameCells[2]) {
    events.winner = gameCells[0]
    return events.winner
  } else if (gameCells[3] !== '' && gameCells[3] === gameCells[4] && gameCells[4] === gameCells[5]) {
    events.winner = gameCells[3]
    return events.winner
  } else if (gameCells[6] !== '' && gameCells[6] === gameCells[7] && gameCells[7] === gameCells[8]) {
    events.winner = gameCells[6]
    return events.winner
  } else if (gameCells[0] !== '' && gameCells[0] === gameCells[4] && gameCells[4] === gameCells[8]) {
    events.winner = gameCells[0]
    return events.winner
  } else if (gameCells[2] !== '' && gameCells[2] === gameCells[4] && gameCells[4] === gameCells[6]) {
    events.winner = gameCells[2]
    return events.winner
  }
}

// check if we have a winner
const checkWinner = function (gameCells) {
  let count = 0
  //  logic to check if enough moves have been played
  for (let i = 0; i < gameCells.length; i++) {
    if (gameCells[i] === 'X' || gameCells[i] === 'O') {
      count++
    }
  }

  if (count <= 4) {
    return false
  }

  // logic to check if a winning combination is played

  if (gameCells[0] !== '' && gameCells[0] === gameCells[3] && gameCells[3] === gameCells[6]) {
    events.winner = gameCells[0]
    api.finishGame('true')
      .then(store.gameData.over = true)
    return events.winner
  } else if (gameCells[1] !== '' && gameCells[1] === gameCells[4] && gameCells[4] === gameCells[7]) {
    events.winner = gameCells[1]
    api.finishGame('true')
      .then(store.gameData.over = true)
    return events.winner
  } else if (gameCells[2] !== '' && gameCells[2] === gameCells[5] && gameCells[5] === gameCells[8]) {
    events.winner = gameCells[2]
    api.finishGame('true')
      .then(store.gameData.over = true)
    return events.winner
  } else if (gameCells[0] !== '' && gameCells[0] === gameCells[1] && gameCells[1] === gameCells[2]) {
    events.winner = gameCells[0]
    api.finishGame('true')
      .then(store.gameData.over = true)
    return events.winner
  } else if (gameCells[3] !== '' && gameCells[3] === gameCells[4] && gameCells[4] === gameCells[5]) {
    events.winner = gameCells[3]
    api.finishGame('true')
      .then(store.gameData.over = true)
    return events.winner
  } else if (gameCells[6] !== '' && gameCells[6] === gameCells[7] && gameCells[7] === gameCells[8]) {
    events.winner = gameCells[6]
    api.finishGame('true')
      .then(store.gameData.over = true)
    return events.winner
  } else if (gameCells[0] !== '' && gameCells[0] === gameCells[4] && gameCells[4] === gameCells[8]) {
    events.winner = gameCells[0]
    api.finishGame('true')
      .then(store.gameData.over = true)
    return events.winner
  } else if (gameCells[2] !== '' && gameCells[2] === gameCells[4] && gameCells[4] === gameCells[6]) {
    events.winner = gameCells[2]
    api.finishGame('true')
      .then(store.gameData.over = true)
    return events.winner
  }
  if (count === 9) {
    ui.isDraw()
    api.finishGame('true')
      .then(store.gameData.over = true)
  }
}

module.exports = {
  playerXGo,
  playerOGo,
  checkSpace,
  switchTurn,
  checkWinner,
  currentPlayer,
  game,
  tempCheck
}
