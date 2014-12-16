var mongodb = require('./mongodb');
var SaySchema = require('../schemas/say')
var Say = mongodb.mongoose.model('Say', SaySchema)

module.exports = Say