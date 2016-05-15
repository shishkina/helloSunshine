var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var authorizationController = require('../controllers/authorization.js');
var userController = require('../controllers/user.js');
var User = require('../models/user.js');

router.post('/', authorizationController.makeToken);
router.post('/signup', userController.createUser);
router.use(authorizationController.verifyToken);

module.exports = router;
