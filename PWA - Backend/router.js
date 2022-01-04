const express = require('express');
let LawyerAPI = require('./server/lawyers');
let AppointmentAPI = require('./server/appointment');
let ClientAPI = require('./server/clients');
let AuthAPI = require('./server/auth');




function initialize() {
    let api = express();
  
    api.use('/lawyers',LawyerAPI());
    api.use('/appointments', AppointmentAPI());
    api.use('/clients', ClientAPI());
    api.use('/auth', AuthAPI());
    
    return api;
}

module.exports ={
    initialize: initialize,
};