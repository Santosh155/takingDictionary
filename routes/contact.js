const express = require('express');
const router = express.Router();
const { contact } = require('../controllers/contactUsController');

router.post('/', contact);

module.exports = router;
