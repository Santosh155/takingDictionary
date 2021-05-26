const express = require('express');
const {
    signUp,
    login,
    adminCreateDictionary,
} = require('../controllers/authController');
const protect = require('../middlewares/authMiddlewares');

const router = express.Router();

router.post('/register', signUp);
router.post('/login', login);
router.post('/admin/createDictionary', protect, adminCreateDictionary);

module.exports = router;
