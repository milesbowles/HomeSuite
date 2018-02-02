/** Require mongoose as the MongoDB ORM */
const mongoose = require("mongoose");
/** Reference a schema for the suite model */
const Schema = mongoose.Schema;
/** Define the model of the schema */
const suiteSchema = new Schema({
    /** User reference */
    username: {
        type: String,
        required: true
    },
    /** Password to access account */
    password: {
        type: String,
        required: true
    },
    loggedIn: {
        type: Boolean,
        default: false
    }
});
/** Reference the model of the schema */
const Suite = mongoose.model("Suite", suiteSchema);
/** Export the Suite */
module.exports = Suite;
