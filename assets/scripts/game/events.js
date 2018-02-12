'use strict'

const logic = require('../tempGameLogic')
const ui = require('./ui.js')
const api = require('./api.js')
const store = require('../store.js')

let winner = ''

let targetID = ''

let gameCollection

let numWins = 0

let numGamesPlayed = 0

let numGamesFinsihed = 0

let completionPercentage = 0

const clickedID = function (event) {
  targetID = (event.target.id)
}

const getData = function (data) {
  numWins = 0
  gameCollection = data.games
  console.log(gameCollection)
  generateStats()
  ui.updateStats(numWins)
  // ui.updateStatsComplete(completionPercentage)
}

const getTotalGames = function (data) {
  numGamesPlayed = 0
  numGamesFinsihed = 0
  console.log(data)
  gameCollection = data.games
  console.log(gameCollection)
  console.log('gamecells')
  generateNumGames()
  debugger
  ui.updateStatsComplete(completionPercentage)
}

const generateStats = function () {
  console.log(gameCollection.length)
  console.log(gameCollection)
  for (let i = 0; i < gameCollection.length; i++) {
    if (logic.tempCheck(gameCollection[i].cells) === 'X') {
      numWins++
    }
  }
  return numWins
}

const generateNumGames = function () {
  console.log('here')
  for (let i = 0; i < gameCollection.length; i++) {
    numGamesPlayed++
    if (gameCollection[i].over === true) {
      numGamesFinsihed++
    }
  }
  console.log(numGamesPlayed + ' Num games played')
  console.log(numGamesFinsihed + ' finished')
  completionPercentage = Math.round((numGamesFinsihed / numGamesPlayed) * 100)
  console.log(completionPercentage)
  return completionPercentage
}

const getCompletedGames = function () {
  api.getGames()
    .then(getData)

  getAllGames()
}

const getAllGames = function () {
  api.getAllGames()
    .then(getTotalGames)
}

const onBlockSelect = function () {
  if (store.gameData.over === false) {
    if (logic.checkSpace(targetID) === true) {
      ui.spacePlayed()
      return
    }
    if (logic.currentPlayer === 'X') {
      logic.playerXGo(targetID)
    } else {
      logic.playerOGo(targetID)
    }
    logic.currentPlayer = logic.switchTurn(logic.currentPlayer)
    winner = (logic.checkWinner(logic.game.gameCells))

    if (winner === false) {
      return 'no Winner'
    }
    console.log(winner)

    if (winner === 'X') {
      ui.showWinner('X')
      ui.incWinner('X')
    }

    if (winner === 'O') {
      ui.showWinner('O')
      ui.incWinner('O')
    }
  } else {
    ui.gameOver()
  }
}

const onStartNewGame = function () {
  logic.game.gameCells = ['', '', '', '', '', '', '', '', '']
  logic.currentPlayer = 'X'
  api.initGame()
    .then(ui.newGame)
    .catch(ui.newGameError) //  TODO Update this to real error message
}

const onDismissAlert = function () {
  ui.dismissAlert()
}

const onDismissError = function () {
  ui.dismissError()
}

const addHandlers = () => {
  $('#test').click(clickedID)
  $('#test').click(onBlockSelect)
  $('#startNewGame').click(onStartNewGame)
  $('#getHistory').click(getCompletedGames)
  $('#closeAlert').click(onDismissAlert)
  $('#closeError').click(onDismissError)
}

module.exports = {
  onBlockSelect,
  addHandlers,
  targetID,
  winner,
  onStartNewGame,
  gameCollection,
  getCompletedGames,
  generateStats,
  generateNumGames
}
