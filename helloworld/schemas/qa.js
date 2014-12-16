var mongodb = require('../models/mongodb');
var Schema = mongodb.mongoose.Schema;

var QaSchema = new Schema({
user : String,
title : String,
content : String,
category : String,
create_date : { type: Date, default: Date.now},
});

QaSchema.statics = {
  findAll: function(cb) {
    return this
      .find({})
      .sort('-create_date')
      .exec(cb)
  }
}

module.exports = QaSchema