var Say = require('../models/Say');

// signup
exports.findAll = function(req, res) {
  Say.findAll(function(err, obj) {
    if (err) {
      console.log(err)
    }

    res.send(obj);
  })
}

exports.add = function(req, res) {
	console.log(req.body);
	var json = req.body;
	if(json._id){//update
	} else {
		var _say = new Say(json)
  		_say.save(function(err, obj) {
			if(err) {
				res.send({'success':false,'err':err});
			} else {
				res.send({'success':true});
			}
		});
	}
}

