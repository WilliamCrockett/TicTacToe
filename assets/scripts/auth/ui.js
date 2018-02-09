'use strict'

const store = require('../store')

const onSignUpSuccess = function () {
  $('#signUpModal').modal('hide')
  $('#signUpEvent').modal('show')
  $('#signUpTitle').text('Sign Up Success')
  $('#signUpBody').text("You've sucessfully signed up. Enjoy playing!")
}

const onSignUpFailure = function () {
  $('#signUpModal').modal('hide')
  $('#signUpEvent').modal('show')
  $('#signUpTitle').text('Sign Up Failure!')
  $('#signUpBody').text("You've encountered an error while trying to sign up.")
}

const onSignInSuccess = function (data) {
  $('#signInModal').modal('hide')
  $('#signUpEvent').modal('show')
  $('#signUpTitle').text('Sign In Success')
  $('#signUpBody').text("You've sucessfully signed In. Enjoy playing!")
  $('#instructionBoard').css('visibility', 'visible')
  // $('#gameboard').css('visibility', 'visible')
  $('#signOut').css('visibility', 'visible')
  $('#change-password-button').css('visibility', 'visible')
  $('#sign-up-button').css('visibility', 'hidden')
  $('#sign-in-button').css('visibility', 'hidden')
  store.user = data.user
}

const onSignInFailure = function (data) {
  $('#signInModal').modal('hide')
  $('#signUpEvent').modal('show')
  $('#signUpTitle').text('Sign In Failure')
  $('#signUpBody').text("You've encountered an error while trying to sign in. Please check your email and password")
}

const onPasswordChangeSuccess = function (data) {
  $('#changePasswordModal').modal('hide')
  $('#signUpEvent').modal('show')
  $('#signUpTitle').text('Password')
  $('#signUpBody').text('Password changed successfully')
}

const onPasswordChangeFailure = function (data) {
  $('#changePasswordModal').modal('hide')
  $('#signUpEvent').modal('show')
  $('#signUpTitle').text('Password ')
  $('#signUpBody').text('There was an error while changing your password')
}

const onSignOutSuccess = function () {
  $('#signUpEvent').modal('show')
  $('#signUpTitle').text('Sign-out')
  $('#signUpBody').text("You've successfully been signed out!")
  $('#change-password-button').css('visibility', 'hidden')
  $('#sign-up-button').css('visibility', 'visible')
  $('#sign-in-button').css('visibility', 'visible')
  $('#signOut').css('visibility', 'hidden')
  $('#gameboard').css('visibility', 'hidden')
  $('#change-password-button').css('visibility', 'hidden')
  $('#sign-up-button').css('visibility', 'visible')
  $('#sign-in-button').css('visibility', 'visible')
}

const onSignOutFailure = function () {
  $('#signUpEvent').modal('show')
  $('#signUpTitle').text('Sign-out')
  $('#signUpBody').text('There was a problem signing you out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onPasswordChangeSuccess,
  onPasswordChangeFailure,
  onSignOutSuccess,
  onSignOutFailure
}
