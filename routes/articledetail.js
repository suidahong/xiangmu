var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('articledetail', {id:req.query.id, subnav:"通知公告"});
});

module.exports = router;