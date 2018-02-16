'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.onPasswordChangeSuccess)
    .catch(ui.onPasswordChangeFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const clearFields = function (event) {
  event.preventDefault()
  $('#signInEmail').val('')
  $('#signInPassword').val('')
  $('#signUpEmail').val('')
  $('#signUpPassword').val('')
  $('#signUpPasswordConf').val('')
  $('#changePasswordOld').val('')
  $('#changePasswordNew').val('')
}

const addHandlers = () => {
  $('#sign-up-button').on('click', clearFields)
  $('#change-password-button').on('click', clearFields)
  $('#sign-in-button').on('click', clearFields)
  $('#signUp').on('submit', onSignUp)
  $('#signIn').on('submit', onSignIn)
  $('#changePassword').on('submit', onChangePassword)
  $('#signOut').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
