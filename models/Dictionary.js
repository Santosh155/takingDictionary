const { Schema, model } = require('mongoose');

const dictionarySchema = new Schema({
    word: String,
    meaning: String,
});

const Dictionary = model('Dictionary', dictionarySchema);
module.exports = Dictionary;
