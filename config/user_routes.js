var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var bodyParser = require('body-parser');
var request = require('request');
var userController = require('../controllers/user.js');


router.get('/:id', userController.getUser);
router.patch('/:id', userController.updateUser);

module.exports = router;
