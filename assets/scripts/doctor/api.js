const config = require('../config')

const createDoctor = function (data) {
  return $.ajax({
    url: config.apiUrl + '/doctors',
    method: 'POST',
    data: data
  })
}

const getAllDoctors = function () {
  return $.ajax({
    url: config.apiUrl + '/doctors',
    method: 'GET'
  })
}

const getDoctor = function (id) {
  return $.ajax({
    url: config.apiUrl + '/doctors/' + id,
    method: 'GET'
  })
}

const deleteDoctor = function (id) {
  return $.ajax({
    url: config.apiUrl + '/doctors/' + id,
    method: 'DELETE'
  })
}

module.exports = {
  createDoctor: createDoctor,
  getAllDoctors: getAllDoctors,
  getDoctor: getDoctor,
  deleteDoctor: deleteDoctor
}
