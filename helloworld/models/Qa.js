var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var QaSchema = new Schema({
user : String,
title : String,
content : String,
category : String,
create_date : { type: Date, default: Date.now},
});
var Qa = mongodb.mongoose.model("qa", QaSchema);
var QaDAO = function(){};


QaDAO.prototype.save = function(obj, callback) {
	var instance = new Qa(obj);
	instance.save(function(err){
		callback(err);
	});
};

QaDAO.prototype.findAll = function(callback) {
  Qa.find(function(err, obj){
    callback(err, obj);
  });
};

module.exports = new QaDAO();