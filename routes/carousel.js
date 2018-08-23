var express = require('express');
var router = express.Router();

/* GET carousel page. */
router.get('/', function(req, res, next) {
    res.render('carousel');
});

module.exports = router;