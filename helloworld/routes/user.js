var express = require('express');
var router = express.Router();

var User = require('../controllers/user')

 // User
router.post('/signup', User.signup)
router.post('/signin', User.signin)
router.get('/logout', User.logout)
router.get('/admin/user/list', User.signinRequired, User.adminRequired, User.list)

module.exports = router;
