const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: [true, 'Name is required'] },
    email: { type: String, required: [true, 'Email is required'] },
    password: { type: String, required: [true, 'Password is required'] },
    address: String,
    role: { type: String, enum: ['admin', 'user'] },
    date: { type: Date, default: Date.now },
});

const User = model('User', userSchema);
module.exports = User;
