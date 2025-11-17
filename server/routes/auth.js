const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth')

router.post('/checkauth', authController.checkToken)

module.exports = router

