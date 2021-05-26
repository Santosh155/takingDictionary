const express = require('express');
const {
    adminCreateDictionary,
    dictionary,
} = require('../controllers/dictionaryController');
const protect = require('../middlewares/authMiddlewares');

const router = express.Router();

router.post('/admin/createDictionary', protect, adminCreateDictionary);
router.get('/getWord', dictionary);

module.exports = router;
