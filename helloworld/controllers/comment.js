var Comment = require('../models/Comment');

// signup
exports.findAll = function(req, res) {
  Comment.findAll(function(err, obj) {
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
		var _comment = new Comment(json)
  		_comment.save(function(err, obj) {
			if(err) {
				res.send({'success':false,'err':err});
			} else {
				res.send({'success':true});
			}
		});
	}
}

