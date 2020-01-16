const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    user: {
        type: String,
        minlength: 1,
        require: true,
    },

    firstname: {
        type: String,
        minlength: 1
    },
    lastname: {
        type: String,
    },
    
    cellphone: {
        type: String,
        minlength: 1
    },

    homephone: {
        type: String,
    },

    workphone: {
        type: String,
    },
    
    email: {
        type: String,
    },

});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;