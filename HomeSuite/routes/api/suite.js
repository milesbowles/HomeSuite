/** Require express routing */
const express = require("express");
/** Create a router */
const router = express.Router();
/** Bring in the controllers to manipulate based on routing */
const controller = require("../../controllers/suiteController");
/** Bring in the models */
const db = require("../../models");


/** Define the routings */

/**These paths handle general routing without any id input */
router.route("/")
/** Access all elements in the database */
.get(controller.findAllUsers)
/** Create a new user */
.post(controller.addUser);


/** These paths handle functions that require id's */
router.route("/:id")
/** Update a value for the user with the provided id */
.put(controller.updateUser)
.delete(controller.deleteUser);

/** Export the router */
/** Here the routes are basic / and :/ but will be changed to meet frontend criteria */
module.exports = router;