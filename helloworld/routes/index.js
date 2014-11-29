var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var arrData = [{
    "newsImg":"\'index_content/css/myImg/newsImg1.png\'",
    "newsTitle":"国务院严格控制新设行政许可",
    "infor":"国务院总理李克强21日主持召开国务院常务会议，决定出台严格控制新设行政许可的...",
    "sign":"小林妹妹",
    "date":"2014.11.3",
    "mark":[
      "0",
      {
        "posts":"78",
      }],
    
    
  }, {
    "newsImg":"\'index_content/css/myImg/newsImg2.png\'",
    "newsTitle":"国务院严格控制新设行政许可",
    "infor":"国务院总理李克强21日主持召开国务院常务会议，决定出台严格控制新设行政许可的...",
    "sign":"小林妹妹",
    "date":"2014.11.3",
    "mark":[
      "0",
      {
        "posts":"99",
      }],
  }, {
    "newsImg":"\'index_content/css/myImg/newsImg3.png\'",
    "newsTitle":"中国医生工资低、权力大，药企",
    "infor":"随着葛兰素史克行贿案的持续发酵，包括塞诺菲、诺华等一系列著名药企受到了行贿",
    "sign":"小林妹妹",
    "date":"2014.11.3",
    "mark":"1",
  }];
  res.send(arrData);
  // res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: '用户登陆'});
});

router.post('/login', function(req, res) {
  var user={
	username:'admin',
	password:'admin'
  }
  if(req.body.username===user.username && req.body.password===user.password){
    res.redirect('/home');
  }
  res.redirect('/login');
});

router.get('/logout', function(req, res) {
  res.redirect('/');
});

router.get('/home', function(req, res) {
  var user={
    username:'admin',
    password:'admin'
  }
  res.render('home', { title: 'Home',user: user});
});

module.exports = router;