const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: [true, 'Name is required'] },
    email: { type: String, required: [true, 'Email is required'] },
    password: { type: String, required: [true, 'Password is required'] },
    address: String,
    date: { type: Date, default: date.now() },
});

const User = model('User', userSchema);
module.exports = User;
