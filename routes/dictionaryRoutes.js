const express = require('express');
const {
    adminCreateDictionary,
} = require('../controllers/dictionaryController');
const protect = require('../middlewares/authMiddlewares');

const router = express.Router();

router.post('/admin/createDictionary', protect, adminCreateDictionary);

module.exports = router;
