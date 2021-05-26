const DictionaryDB = require('../models/Dictionary');
const UserDB = require('../models/User');

// Admin can add word in dictionary
exports.adminCreateDictionary = async (req, res, next) => {
    try {
        const adminId = await UserDB.findById(req.userData);
        if (adminId.role === 'admin') {
            const { word, meaning } = req.body;
            const dictionary = new DictionaryDB.create({
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

exports.dictionary = async (req, res, next) => {
    try {
        return;
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
