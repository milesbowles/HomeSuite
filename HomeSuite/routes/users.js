var express = require('express');
var router = express.Router();
const controller = require('../controllers/userControl.js')
/* GET users listing to check authentication. */
router.post('/auth/persist', function(req, res) {
	controller.findPersistedUser(req.body.persistToken, (bool) => {
		res.send(bool)
	})
});

router.post('/auth', function(req, res) {
	controller.findUserToAuth(req.body.email, req.body.password, (result) => {
		res.send(result)
	})
});

router.post('/create', function(req, res) {
	controller.createUser(req)
	res.send(true);
});

router.post('/persist', function(req, res) {
	controller.findUserToUpdate(req.body.email, req.body.persistToken, (result) => {
		console.log(result)
		res.send(result)
	})
})

module.exports = router;
