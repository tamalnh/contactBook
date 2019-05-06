const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');


const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,

    },
    email: {
        type: String,
        trim: true
    } 
})

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;