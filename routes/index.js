var express = require('express');
var router = express.Router();

//var navCtrl = require(__dirname + '/../public/javascripts/navCtrl.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var account = req.query.userEmail;
  console.log("account  = ", req.query.userEmail);
  console.log("password = ", req.query.userPwd);
//  console.log("navCtrl = ", navCtrl);
  res.render('home',
	{
		title: "Jacky's Blog",
		account: account
	}
  );
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

//var v = require('../public/javascripts/navCtrl');

//console.log('v=', v);

module.exports = router;
