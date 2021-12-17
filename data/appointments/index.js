const Appointments = require('./appointments');
const AppointmentsService = require('./service');

const service = AppointmentsService(Appointments);

module.exports=service;