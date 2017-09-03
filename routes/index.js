var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('newHome', { title: "Jacky's Blog" });
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
