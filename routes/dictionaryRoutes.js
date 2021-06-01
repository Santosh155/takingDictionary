const express = require('express');
const {
    adminCreateDictionary,
    dictionary,
} = require('../controllers/dictionaryController');
const protect = require('../middlewares/authMiddlewares');

const router = express.Router();

router.post('/dictionaryAdd', protect, adminCreateDictionary);
router.get('/getWord/:word', dictionary);

module.exports = router;
