const { Schema, model } = require('mongoose');

const ContactUs = new Schema({
    name: String,
    email: String,
    message: String,
});

const Contact = model('Contact', ContactUs);
module.exports = Contact;
