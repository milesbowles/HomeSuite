var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/users', function(req, res, next) {
	console.log(req.body)
	res.send(true);
});

module.exports = router;
