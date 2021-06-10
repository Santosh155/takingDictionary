const express = require('express');
const {
    signUp,
    login,
    user,
    userUpdate,
} = require('../controllers/authController');
const protect = require('../middlewares/authMiddlewares');

const router = express.Router();

router.post('/register', signUp);
router.post('/login', login);
router.get('/user', protect, user);
router.post('/user/update', protect, userUpdate);

module.exports = router;
