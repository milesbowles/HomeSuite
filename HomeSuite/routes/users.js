var express = require('express');
var router = express.Router();
const controller = require('../controllers/userControl.js')
/* GET users listing to check authentication. */
router.post('/auth/persist', function(req, res) {
	controller.findPersistedUser(req.body.persistToken, (bool) => {
		/** Send the boolean to the Login component to use */
		/** This is used to update the LoggedIn state to true */
		res.send(bool)
	})
});

/** When receiving following post request */
router.post('/auth', function(req, res) {
	/** Takes a callback */
	controller.findUserToAuth(req.body.email, req.body.password, (result) => {
		/** Send the result to be accessed by checkAuth function in routeLogin component */
		res.send(result)
	})
});

/** When receiving a post request with following */
router.post('/create', function(req, res) {
	controller.createUser(req)
	res.send(true);
});

router.post('/persist', function(req, res) {
	/** Update the user's persist variable in localStorage */
	controller.findUserToUpdate(req.body.email, req.body.persistToken, (result) => {
		console.log(result)
		res.send(result)
	})
})

module.exports = router;
