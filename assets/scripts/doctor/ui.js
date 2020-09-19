const createDoctorSuccess = function (res) {
  $('#doctor-message-created').show()
  $('#doctor-message-created').text('You created doctor successfully')
}

const createDoctorFailure = function () {
  $('#create-doctor-form').text('Try again.')
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
'<br><br>')
  })
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
'<br><br>')
}

const showDoctorFailure = function () {
  $('#show-all-doctors-form').text('Try again.')
}

const deleteDoctorSuccess = function (res) {
  $('#delete-doctor-form').text('You`ve deleted doctor successfully.')
}

const deleteDoctorFailure = function () {
  $('#delete-doctor-form').text('Try again.')
}

module.exports = {
  createDoctorSuccess: createDoctorSuccess,
  createDoctorFailure: createDoctorFailure,
  showAllDoctorsSuccess: showAllDoctorsSuccess,
  showDoctorFailure: showDoctorFailure,
  showDoctorSuccess: showDoctorSuccess,
  deleteDoctorSuccess: deleteDoctorSuccess,
  deleteDoctorFailure: deleteDoctorFailure
}
