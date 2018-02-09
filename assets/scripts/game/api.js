'use strict'

const config = require('../config.js')
const store = require('../store.js')

const initGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (index, value, over) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.gameData.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

const finishGame = function (over) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.gameData.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': '',
          'value': ''
        },
        'over': over
      }
    }
  })
}

module.exports = {
  initGame,
  updateGame,
  finishGame
}
