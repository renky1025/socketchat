var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //;
  //req.session.sessname = 'i am a sesion';
  //console.log(req.session.sessname);
  //res.render('index', { title: 'Express', message : req.session.sessname});
  //res.send('session:' + req.session.sessname);

  res.sendfile(__dirname+'/../public/index.html');
});

module.exports = router;
