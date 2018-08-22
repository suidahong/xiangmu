var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('noticelist', { title :'通知通告', list:'articlelist' });
});

module.exports = router;