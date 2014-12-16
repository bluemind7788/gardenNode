var mongodb = require('./mongodb');
var QaSchema = require('../schemas/qa')
var Qa = mongodb.mongoose.model('Qa', QaSchema)

module.exports = Qa