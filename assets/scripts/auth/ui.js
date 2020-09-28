const store = require('./../store')

const signUpSuccess = function (res) {
  $('#auth-message-sign-up').show()
  $('#auth-message-sign-up').text('Thanks for Siging up ' + res.user.email + ' You can Sign In Now')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#auth-message-sign-up').text('Try again.')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (res) {
  store.user = res.user
  $('#auth-message-sign-in').text('Thanks for Signing in ' + res.user.email)
  $('#sign-in-form').trigger('reset')
  $('#auth-message-sign-up').hide()
  $('#change-password-form').show()
  $('#change-password-message').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('.container').hide()
  $('#exp').hide()
  $('#create-doctor-form').show()
  $('#create-doctor-message').show()
  $('#show-all-doctors-form').show()
  $('#show-all-doctors-message').show()
  $('#show-doctor-form').show()
  $('#show-doctor-message').show()
  $('#delete-doctor-form').show()
  $('#delete-doctor-message').show()
  $('#update-doctor-form').show()
  $('#update-doctor-message').show()
  $('#edit-doctor-form').show()
  $('#edit-doctor-message').show()
  $('#sign-out-form').show()
  $('#auth-message-sign-out').text('')
}

const signInFailure = function () {
  $('#auth-message-sign-in').text('Try again.')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function (res) {
  $('#change-password-form').trigger('reset')
  $('#change-password-message').text('Password Changed!')
}

const changePasswordFailure = function (res) {
  $('#auth-message-password-change').text('Try again.')
  $('#change-password-form').trigger('reset')
}
const signOutSuccess = function (res) {
  $('#auth-message-sign-out').text('You`ve Successfully signed out')
  $('#sign-out-form').hide()
  $('#auth-message-sign-up').hide()
  $('#sign-in-form').show()
  $('#auth-message-sign-in').text('')
  $('#sign-up-form').show()
  $('.container').show()
  $('#exp').show()
  $('#change-password-message').text('')
  $('#change-password-form').text('')
  $('#auth-message-password-change').text('')
  $('#create-doctor-form').hide()
  $('#create-doctor-message').text('')
  $('#show-all-doctors-form').hide()
  $('#show-all-doctors-message').text('')
  $('#show-doctor-form').hide()
  $('#show-doctor-message').text('')
  $('#delete-doctor-form').hide()
  $('#delete-doctor-message').text('')
  $('#update-doctor-form').hide()
  $('#update-doctor-message').text('')
  $('#edit-doctor-form').hide()
  $('#edit-doctor-message').text('')
  $('#doctors').text('')
}

const signOutFailure = function (res) {
  $('#auth-message-sign-out').text('Try again.')
}
module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
}
