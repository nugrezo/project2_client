'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const doctorEvents = require('./doctor/events')
$(() => {
  $(() => {
    $('#change-password-form').hide()
    $('#sign-out-form').hide()
    $('#sign-up-form').on('submit', authEvents.onSignUpForm)
    $('#sign-in-form').on('submit', authEvents.onSignInForm)
    $('#change-password-form').on('submit', authEvents.onChangePasswordForm)
    $('#sign-out-form').on('submit', authEvents.onSignOut)
    $('#create-doctor-form').on('submit', doctorEvents.onCreateDoctorForm)
    $('#show-all-doctors-form').on('submit', doctorEvents.onShowAllDoctorsForm)
    $('#show-doctor-form').on('submit', doctorEvents.onShowDoctorForm)
    $('#delete-doctor-form').on('submit', doctorEvents.onDeleteDoctorForm)
    $('#update-doctor-form').on('submit', doctorEvents.onUptadeDoctorForm)
  })
})
