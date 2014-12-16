var express = require('express');
var router = express.Router();

var Comment = require('../controllers/qa');

router.post('/add', Comment.add);

router.get('/all', Comment.findAll);


module.exports = router;