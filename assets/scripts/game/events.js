'use strict'

const logic = require('../tempGameLogic')
const ui = require('./ui.js')
const api = require('./api.js')
const store = require('../store.js')

let winner = ''

let targetID = ''

let gameCollection

let numWins = 0

const clickedID = function (event) {
  targetID = (event.target.id)
}

const getData = function (data) {
  numWins = 0
  gameCollection = data.games
  console.log(gameCollection)
  generateStats()
  ui.updateStats(numWins)
  console.log("you've won a total of " + numWins + ' games in your career!')
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

const getCompletedGames = function () {
  api.getGames()
    .then(getData)
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
  generateStats
}
