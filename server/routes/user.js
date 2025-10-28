const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')

router.get('/signup', userController.getSignup);
router.post('/signup', userController.postSignup)

router.get('/testR', userController.testR)

module.exports = router
