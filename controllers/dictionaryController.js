const DictionaryDB = require('../models/Dictionary');
const UserDB = require('../models/User');
const webpush = require('web-push');

// Admin can add word in dictionary
exports.adminCreateDictionary = async (req, res, next) => {
    try {
        const publicVapidKey =
            'BOxCDSGVP6vFHsGaHTyEBt7cWHppg-t16SyrQ2SFF9Bi2bOi8YBXc8IwxNYI8lw1C8LVR9OaTQ5N3EuanDFXKpg';
        const privateVapidKey = 'BYZdWkS06ptwEork_IFHgnuK6foEfcQLOFtnjv15F1I';
        webpush.setVapidDetails(
            'mailto:test@test.com',
            publicVapidKey,
            privateVapidKey
        );
        const adminId = await UserDB.findById(req.userData);
        if (adminId.role === 'admin') {
            const { word, meaning } = req.body;
            const dictionary = await DictionaryDB.create({
                word: word,
                meaning: meaning,
            });
            res.status(201).send({ message: 'Word added in Dictionary' });
            const payload = JSON.stringify({ title: 'push test' });
            webpush.sendNotification(word, payload).catch((err) => {
                console.log(err);
            });
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
