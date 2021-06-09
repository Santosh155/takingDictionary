const DictionaryDB = require('../models/Dictionary');
const UserDB = require('../models/User');

// Admin can add word in dictionary
exports.adminCreateDictionary = async (req, res, next) => {
    try {
        const adminId = await UserDB.findById(req.userData);
        if (adminId.role === 'admin') {
            const { word, meaning } = req.body;
            const dictionary = await DictionaryDB.create({
                word: word,
                meaning: meaning,
            });
            return res
                .status(201)
                .send({ message: 'Word added in Dictionary' });
        } else {
            return res.status(403).send({ message: 'Unauthorized' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get words from dictionary
exports.dictionary = async (req, res, next) => {
    try {
        const dictionary = await DictionaryDB.findOne({
            word: req.params.word,
        });
        if (dictionary === null) {
            return res.status(400).send({ message: 'Sorry, no word found' });
        }
        res.status(200).send({ meaning: dictionary });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//get user data
exports.user = async (req, res, next) => {
    try {
        const dictionary = await UserDB.findById(req.userData);
        if (dictionary.role === 'user') {
            return res.status(200).send({ message: dictionary });
        } else {
            return res.status(200).send({ message: dictionary });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
