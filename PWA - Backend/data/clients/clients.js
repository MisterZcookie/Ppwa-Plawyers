let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ClientSchema = new Schema ({

    name: { type: String, required: true, unique: false},

    lastName: { type: String, required: true},

    email:{ type: String, required: true, unique: true}
});

let Client = mongoose.model('Client', ClientSchema);

module.exports= Client;
