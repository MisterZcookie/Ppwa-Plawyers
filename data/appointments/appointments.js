let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AppointmentSchema = new Schema ({

    date: { type: String, required: true},

    hour: { type: String, required: true},

    client:{ type: String, required: true},

    clientEmail:{ type: String, required: true},

    speciality: { type: String, required: true}

    
});

let Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports= Appointment;
