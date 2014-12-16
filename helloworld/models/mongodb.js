//var mongoose = require('mongoose');
//mongoose.connect('mongodb://xMk60pO0lmmIQXlOBtdSwx4s:PrB211Ulp2PeRh1uxoNFdgUDuX8czUZC@mongo.duapp.com:8908/iqctLBzdnPGfDuPcoOMf');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejs');
exports.mongoose = mongoose;


// var mongoose = require('mongoose');
// var db = exports.Db = mongoose.createConnection();
// var options = {
//         db: { native_parser: true },
//         server: { poolSize: 5 },
//         user: '',
//         pass: ''
//     }
// var isDev = true;
// var host = isDev ? 'localhost' : 'mongo.duapp.com';
// var port = isDev ? '27017' : '8908';
// var database = isDev ? 'foo' : 'iqctLBzdnPGfDuPcoOMf';
// var user = isDev ? 'foo' : 'xMk60pO0lmmIQXlOBtdSwx4s';
// var pass = isDev ? 'bar' : 'PrB211Ulp2PeRh1uxoNFdgUDuX8czUZC';
// db.open(host, database, port, options);
// db.on('error', function (err) {
//    //logger.error("connect error :" + err);
//    //监听BAE mongodb异常后关闭闲置连接
//    db.close();
// });
// //监听db close event并重新连接
// db.on('close', function () {
// 	logger.info("connect close retry connect ");
// 	db.open(host, database, port, options);
// });

exports.mongoose = mongoose;