/** Require express */
const express = require("express");
/** Create the router */
const router = express.Router();
/** Bring in the routes */
const suiteRoutes = require("./suite");


/** Create the usage of the article routes */
/** Note that this redefines the / and /: paths in the suite.js routes */
/** The new routes created here then are -/suite/- and /suite/:id */
/** Basically adds the suite path to the beginning of the routes created in suite.js */
router.use("/suite", suiteRoutes);

/** Export the router */
module.exports = router;