var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('tododetail', {id:req.query.id, subnav:"代办事项"});
});

module.exports = router;