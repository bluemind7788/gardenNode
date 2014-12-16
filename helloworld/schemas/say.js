var mongodb = require('../models/mongodb');
var Schema = mongodb.mongoose.Schema;

var SaySchema = new Schema({
user : String,
content : String,
create_date : { type: Date, default: Date.now},
});

SaySchema.statics = {
  findAll: function(cb) {
    return this
      .find({})
      .sort('-create_date')
      .exec(cb)
  }
}

module.exports = SaySchema