'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const events = require('./events.js')
const store = require('../store.js')

let userX = 0
let userO = 0

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

const showWinner = function (win) {
  $('#winDraw').modal('show')
  $('#winOrDraw').text('We have a winner!')
  $('#winOrDrawBody').text('Congratulations! User ' + win + ' has won the game!')
}

// const resetGame = function () {
//   for (let i = 0; i < 9; i++) {
//     $('#' + i).text('')
//   }
// }

const newGame = function (data) {
  for (let i = 0; i < 9; i++) {
    $('#' + i).text('')
  }
  $('#test').css('visibility', 'visible')
  store.gameData = data.game
  console.log(store.gameData)
}

module.exports = {
  placeX,
  placeO,
  showWinner,
  incWinner,
  //  resetGame,
  newGame
}
