const ContactDB = require('../models/Contact');

exports.contact = async (req, res, next) => {
    try {
        const { name, email, message } = req.body;
        await ContactDB.create({
            name: name,
            email: email,
            message: message,
        });
        res.status(200).send({ message: 'Thank you for your feedback.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
