let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema ({

    name: { type: String, required: true, unique: false},

    email:{ type: String, required: true, unique: true}, 

    password: {type: String, required: true},

    role: {type: String, enum: ['Admin', 'Client', 'User', 'Lawyers'], required: true}
});

let User = mongoose.model('User', UserSchema);

module.exports= User;