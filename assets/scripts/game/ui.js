'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
// const api = require('./api.js')
// const ui = require('./ui.js')
// const events = require('./events.js')
const store = require('../store.js')
// const logic = require('../tempGameLogic')

let userX = 0
let userO = 0
let winningCombo

const incWinner = function (winningUser) {
  if (winningUser === 'X') {
    userX++
    $('#userX').text(userX)
  } else if (winningUser === 'O') {
    userO++
    $('#userO').text(userO)
  }
}

const placeX = function (targetID) {
  $('#' + targetID).text('X')
}

const placeO = function (targetID) {
  $('#' + targetID).text('O')
}

const showWinner = function (win, combo) {
  for (let i = 0; i < 3; i++) {
    $('#' + combo[i]).css('background-color', 'red')
  }
  $('#winDraw').modal('show')
  $('#winOrDraw').text('We have a winner!')
  $('#winOrDrawBody').text('Congratulations! User ' + win + ' has won the game!')
}

const isDraw = function () {
  $('#winDraw').modal('show')
  $('#winOrDraw').text('No winner')
  $('#winOrDrawBody').text('This game is a draw... how about you play again?')
}

const newGame = function (data) {
  for (let i = 0; i < 9; i++) {
    $('#' + i).text('')
    $('#' + i).css('background-color', 'rgb(0, 156, 161)')
  }
  $('#test').css('visibility', 'visible')
  store.gameData = data.game
}

const newGameError = function () {
  $('#cantPlay').toggle() // update to new banner
}

const updateStats = function (wins) {
  $('#previous-game-stats').text("You've won a total of " + wins + ' games in your career')
}

const updateStatsComplete = function (completeGames) {
  $('#hor-rule').toggle()
  $('#all-game-stats').text("You've completed " + completeGames + '% of games started')
}

const spacePlayed = function () {
  $('#cantPlay').toggle()
}

const dismissAlert = function () {
  $('#cantPlay').toggle()
}

const dismissError = function () {
  $('#gameOverAlert').toggle()
}

const gameOver = function () {
  $('#gameOverAlert').toggle()
}

module.exports = {
  placeX,
  placeO,
  showWinner,
  incWinner,
  newGame,
  isDraw,
  updateStats,
  spacePlayed,
  dismissError,
  newGameError,
  gameOver,
  dismissAlert,
  updateStatsComplete,
  winningCombo
}
