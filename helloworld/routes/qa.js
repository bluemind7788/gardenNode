var express = require('express');
var router = express.Router();

var Qa = require('../controllers/qa');

router.post('/add', Qa.add);

router.get('/all', Qa.findAll);


module.exports = router;