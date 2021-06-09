const express = require('express');
const {
    adminCreateDictionary,
    dictionary,
    user,
} = require('../controllers/dictionaryController');
const protect = require('../middlewares/authMiddlewares');

const router = express.Router();

router.post('/dictionaryAdd', protect, adminCreateDictionary);
router.get('/user', protect, user);
router.get('/getWord/:word', dictionary);

module.exports = router;
