var express = require('express');
var router = express.Router();

var Qa = require('./../models/Qa.js');

router.post('/add', function(req, res) {
	console.log(req.body);
	var json = req.body;
	if(json._id){//update
	} else {//insert
		Qa.save(json, function(err){
			if(err) {
				res.send({'success':false,'err':err});
			} else {
				res.send({'success':true});
			}
		});
	}
});

router.get('/all', function(req, res) {
	Qa.findAll(function(err, obj){
	    res.send(obj);
	});
	
});


module.exports = router;