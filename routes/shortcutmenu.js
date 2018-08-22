var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shortcutmenu', { hidemore :true ,title: "快捷菜单"});
});

module.exports = router;