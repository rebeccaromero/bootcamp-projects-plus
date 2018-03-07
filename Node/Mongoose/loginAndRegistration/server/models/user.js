var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        unique: true, 
        validate: [{
            validator: function(email) {
                return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
            },
            message: "Email is not valid. Try again okay?"
        }]
    },
    first_name: {
        type: String, 
        required: true, 
        minlength: 2
    },
    last_name: {
        type: String, 
        required: true, 
        minlength: 2
    },
    password: {
        type: String, 
        required: true, 
        minlength: 8
    },
    birthday: {
        type: String, 
        required: true
    },
});
var User = mongoose.model('User', UserSchema);