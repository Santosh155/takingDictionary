const { Schema, model } = require('mongoose');

const dictionarySchema = new Schema({
    word: String,
    meanning: String,
});

const Dictionary = model('Dictionary', dictionarySchema);
module.exports = Dictionary;
