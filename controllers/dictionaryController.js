const DictionaryDB = require('../models/Dictionary');

exports.dictionary = async (req, res, next) => {
    try {
        return;
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
