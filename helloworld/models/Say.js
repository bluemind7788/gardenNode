var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var SaySchema = new Schema({
user : String,
content : String,
create_date : { type: Date, default: Date.now},
});
var Say = mongodb.mongoose.model("say", SaySchema);
var SayDAO = function(){};


SayDAO.prototype.save = function(obj, callback) {
	var instance = new Say(obj);
	instance.save(function(err){
		callback(err);
	});
};

SayDAO.prototype.findAll = function(callback) {
  Say.find(function(err, obj){
    callback(err, obj);
  });
};

module.exports = new SayDAO();