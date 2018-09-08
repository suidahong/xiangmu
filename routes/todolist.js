var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var url = "http://127.0.0.1:8083/portal/ws/todo/mytodo?type=1";
	res.render('todolist', {title :'待办事项', url:url, list:'todolistp',subnav :'待办事项'});
});

module.exports = router;
