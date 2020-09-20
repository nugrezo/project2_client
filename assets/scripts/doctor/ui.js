const createDoctorSuccess = function (res) {
  $('#doctor-message-created').text('You created doctor successfully')
}

const createDoctorFailure = function () {
  $('#doctor-message-created').text('All required information must be complated.')
  $('#create-doctor-form').trigger('reset')
}

const showAllDoctorsSuccess = function (res) {
  // id of result area
  const selector = '#doctors'
  // Cleaning inner html of result area
  $(selector).empty()
  // Loop each doctor object and add it to result area
  $.each(res.doctors, function (index, doctor) {
    addDoctorToUi(selector, doctor)
  })
}

const showAllDoctorsFailure = function () {
  $('#show-doctor-form').text('Try again.')
}

const showDoctorSuccess = function (res) {
  const doctor = res.doctor
  // id of result area
  const selector = '#doctor'
  // Cleaning inner html of result area
  $(selector).empty()
  //  add doctor object to result area
  addDoctorToUi(selector, doctor)
}

// Appends doctor object with UI format to given dom element
const addDoctorToUi = function (selector, doctor) {
  $(selector).append(addDoctorToUiToLine('Doctor Name:', doctor.name + ' ' + doctor.surName) +
  addDoctorToUiToLine('Profession:', doctor.profession) +
  addDoctorToUiToLine('Phone:', doctor.phone) +
  addDoctorToUiToLine('Address:', doctor.address) +
  addDoctorToUiToLine('Years Of Experience:', doctor.yearsOfExperience) +
  addDoctorToUiToLine('Doctor Id:', doctor._id) +
'<br><br>')
}

// Single line format for addDoctorToUi function
const addDoctorToUiToLine = function (fPhrase, secPhrase) {
  return '<strong>' + fPhrase + '</strong> ' + secPhrase + '<br>'
}

const showDoctorFailure = function () {
  $('#doctor').text('Try again.')
}

const deleteDoctorSuccess = function (res) {
  $('#doctor').text('You`ve deleted doctor successfully.')
}

const deleteDoctorFailure = function () {
  $('#doctor').text('Try again.')
}

// Fill edit form for selected object
const updateDoctorSuccess = function (res) {
  const doctor = res.doctor
  $('#edit-doctor-form').find('#doctor_id').val(doctor._id)
  $('#edit-doctor-form').find('#doctor_name').val(doctor.name)
  $('#edit-doctor-form').find('#doctor_surName').val(doctor.surName)
  $('#edit-doctor-form').find('#doctor_profession').val(doctor.profession)
  $('#edit-doctor-form').find('#doctor_phone').val(doctor.phone)
  $('#edit-doctor-form').find('#doctor_address').val(doctor.address)
  $('#edit-doctor-form').find('#doctor_yearsOfExperience').val(doctor.yearsOfExperience)
}

const updateDoctorFailure = function () {
  $('#doctor-update').text('Try again.')
}

const editDoctorSuccess = function (res) {
  console.log('edit')
}

const editDoctorFailure = function () {
  console.log('edited')
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
  updateDoctorFailure: updateDoctorFailure,
  editDoctorSuccess: editDoctorSuccess,
  editDoctorFailure: editDoctorFailure
}
