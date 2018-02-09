'use strict'

const logic = require('../tempGameLogic')
const ui = require('./ui.js')
const api = require('./api.js')
const store = require('../store.js')

let winner = ''

let targetID = ''

const clickedID = function (event) {
  targetID = (event.target.id)
}

// const makeX = function () { // do I even need this?
//   ui.placeX(targetID)
// }

const onBlockSelect = function () {
  if (store.gameData.over === false) {
    if (logic.checkSpace(targetID) === true) {
      alert("can't play that space, it's already been played!")
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
  }
}

// const onResetGame = function () {
//   logic.game.gameCells = ['', '', '', '', '', '', '', '', '']
//   ui.resetGame()
// }

const onStartNewGame = function () {
  logic.game.gameCells = ['', '', '', '', '', '', '', '', '']
  api.initGame()
    .then(ui.newGame)
    .catch(console.log('problem for now'))
}

const addHandlers = () => {
  $('#test').click(clickedID)
  $('#test').click(onBlockSelect)
  $('#resetGame').click(api.test)
  $('#startNewGame').click(onStartNewGame)
}

module.exports = {
  onBlockSelect,
  addHandlers,
  targetID,
  winner,
  //  onResetGame,
  onStartNewGame
}
