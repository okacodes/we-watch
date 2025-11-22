const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth')

router.get('/checkauth', authController.checkToken)
router.get('/clearauth', authController.clearToken)

module.exports = router

