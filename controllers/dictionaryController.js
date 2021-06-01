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
        console.log(req.params.word);
        const dictionary = await DictionaryDB.findOne({
            word: req.params.word,
        });
        console.log(dictionary);
        res.status(200).send({ meaning: dictionary });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
