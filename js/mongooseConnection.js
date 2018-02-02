/** Require mongoose as the MongoDB ORM */
const mongoose = require("mongoose");
/** Define the mongoose Promises for ES6 usability */
mongoose.Promise = Promise;
/** Connect to the ORM */
mongoose.connect(
    /** Use the environment port, */
    /** If not available, use localhost */
    process.env.MONGODB_URI || "mongodb://localhost/homesuite",
    {
        useMongoClient: true
    }
);