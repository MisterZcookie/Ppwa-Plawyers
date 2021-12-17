let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let LawyerSchema = new Schema ({

    name: { type: String, required: true, unique: false},

    lastName: { type: String, required: true},

    speciality: { type: String, required: true},

    email:{ type: String, required: true, unique: true}
});

let Lawyer = mongoose.model('Lawyer', LawyerSchema);

module.exports= Lawyer;

