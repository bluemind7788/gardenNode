var express = require('express');
var router = express.Router();

var Say = require('../controllers/say');

router.post('/add', Say.add);

router.get('/all', Say.findAll);


module.exports = router;