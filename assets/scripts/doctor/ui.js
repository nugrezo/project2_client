const createDoctorSuccess = function (res) {
  $('#doctor-message-created').text('You created doctor successfully')
}

const createDoctorFailure = function () {
  $('#doctor-message-created').text('All required information must be complated.')
  $('#create-doctor-form').trigger('reset')
}

const showAllDoctorsSuccess = function (res) {
  $('#doctors').empty()
  $.each(res.doctors, function (index, doctor) {
    $('#doctors').append(
      '<strong>Doctor Name:</strong> ' + doctor.name + ' ' + doctor.surName + '<br>' +
      '<strong>Profession:</strong> ' + doctor.profession + '<br>' +
      '<strong>Phone:</strong> ' + doctor.phone + '<br>' +
      '<strong>Address:</strong> ' + doctor.address + '<br>' +
      '<strong>Years Of Experience:</strong> ' + doctor.yearsOfExperience + '<br>' +
      '<strong>Doctor Id:</strong> ' + doctor._id + '<br>' +
'<br><br>'
    )
  })
}

const showAllDoctorsFailure = function () {
  $('#show-doctor-form').text('Try again.')
}

const showDoctorSuccess = function (res) {
  const doctor = res.doctor
  $('#doctors').empty().append(
    '<strong>Doctor Name:</strong> ' + doctor.name + ' ' + doctor.surName + '<br>' +
    '<strong>Profession:</strong> ' + doctor.profession + '<br>' +
    '<strong>Phone:</strong> ' + doctor.phone + '<br>' +
    '<strong>Address:</strong> ' + doctor.address + '<br>' +
    '<strong>Years Of Experience:</strong> ' + doctor.yearsOfExperience + '<br>' +
    '<strong>Doctor Id:</strong> ' + doctor._id + '<br>' +
'<br><br>'
  )
}

const showDoctorFailure = function () {
  $('#show-doctor-form').text('Try again.')
}

const deleteDoctorSuccess = function (res) {
  $('#doctor').text('You`ve deleted doctor successfully.')
}

const deleteDoctorFailure = function () {
  $('#doctor').text('Try again.')
}

const updateDoctorSuccess = function (res) {
  $('#update-doctor-form').text('You`ve updated doctor successfully.')
}

const updateDoctorFailure = function () {
  $('#update-doctor-form').text('Try again.')
}

module.exports = {
  createDoctorSuccess: createDoctorSuccess,
  createDoctorFailure: createDoctorFailure,
  showAllDoctorsSuccess: showAllDoctorsSuccess,
  showAllDoctorsFailure: showAllDoctorsFailure,
  showDoctorFailure: showDoctorFailure,
  showDoctorSuccess: showDoctorSuccess,
  deleteDoctorSuccess: deleteDoctorSuccess,
  deleteDoctorFailure: deleteDoctorFailure,
  updateDoctorSuccess: updateDoctorSuccess,
  updateDoctorFailure: updateDoctorFailure
}
