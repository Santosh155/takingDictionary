const { compare, hash } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const UserDB = require('../models/User');

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

//get user data
exports.user = async (req, res, next) => {
    try {
        const userInfo = await UserDB.findById(req.userData);
        if (userInfo.role === 'user') {
            return res.status(200).send({ message: userInfo });
        } else {
            return res.status(200).send({ message: userInfo });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Edit user data
exports.userUpdate = async (req, res, next) => {
    try {
        const userInfo = await UserDB.findById(req.userData);
        await UserDB.updateOne(
            { _id: userInfo._id },
            { $set: { name: req.body.name, address: req.body.address } }
        );
        res.status(200).send({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Update password
exports.updatePassword = async (req, res, next) => {
    try {
        const userInfo = await UserDB.findById(req.userData);
        const { oldPassword, newPassword } = req.body;
        const comparePassword = await compare(oldPassword, userInfo.password);
        if (!comparePassword) {
            return res.status(400).send({ message: "Password doesn't match" });
        }
        const hashedPassword = await hash(newPassword, 12);
        await UserDB.updateOne(
            { _id: userInfo._id },
            { $set: { password: hashedPassword } }
        );
        res.status(200).send({ message: 'Password updated' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
