var mongodb = require('./mongodb');
var UserSchema = require('../schemas/user')
var User = mongodb.mongoose.model('User', UserSchema)

module.exports = User