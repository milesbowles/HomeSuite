/** Require express */
const express = require("express");
/** Create a router */
const router = express.Router();
/** Require path */
const path = require("path");
/** Bring in the apiRoutes */
const apiRoutes = require("./users");


/** Allow the router to use the apiRoutes */
/** Note that this adds the final part to the path url */
/** This changes the /suite and suite/:api paths in api folder to */
/** /api/suite and /api/suite/:id */

router.use("/api", apiRoutes);


/** This will re-route everything to the express root path */
router.use(function(req, res){
    /** When building the front end, this will reroute everything to the build's html file */
    /** To allow routing to the path / */
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


/** Export the routes */
module.exports = router;