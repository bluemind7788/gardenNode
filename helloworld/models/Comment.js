var mongodb = require('./mongodb');
var CommentSchema = require('../schemas/comment')
var Comment = mongodb.mongoose.model('Commnet', CommentSchema)

module.exports = Comment