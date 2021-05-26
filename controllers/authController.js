const { compare, hash } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const UserDB = require('../models/User');
const DictionaryDB = require('../models/Dictionary');

exports.signUp = async (req, res, next) => {
    try {
        const { name, password, address, email } = req.body;
        const emailExists = await UserDB.findOne({ email: email });
        if (emailExists) {
            return res.status(400).send({ message: 'Email already exists' });
        }
        const hashedPassword = await hash(password, 12);
        const newUser = await UserDB.create({
            name: name,
            email: email,
            password: hashedPassword,
            address: address,
            role: 'user',
        });
        res.status(201).send({ message: 'User created' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const findEmail = await UserDB.findOne({ email: email });
        if (!findEmail)
            return res
                .status(400)
                .send({ message: "Email or password doesn't match" });
        const comparePassword = await compare(password, findEmail.password);
        if (!comparePassword)
            return res
                .status(400)
                .send({ message: "Email or password doesn't match" });
        const token = sign({ _id: findEmail._id }, process.env.TOKEN_SECRET);
        res.header('auth-token', token).send({ token: token });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
