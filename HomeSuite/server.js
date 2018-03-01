// // no using babel so we aren't using the import function so we are using create server from http library
// const {createServer} = require("http");
// // ? I don't know what is does
// const compression = require ("express");

// const morgan = require ("morgan");
// // built into Node
// const path = require ("path");
// // defines port and convert into an integer
// const normalizePort = port => parseInt(port, 10);
// // // simple method if not use 5000
// // const PORT = normalizePort (process.env.PORT || 3000)

// // gets the environment from the node amv
// const dev = japp.get("env") !== "production"
// // if not in dev but we are in production the convention is we disable the below - security vulerabilities - 
// // If they send a request to see what server we are on... but this makes it hard for them to get this information
// if (!dev) {
        
//         app.disable ("x-powered-by");
//         // handles a few things for us (middleware)
//         app.use(compression());
//         // common flag logs stuff - what every is most common. 
//         app.use(morgan("common"));

//         // when we are not in production  we need to tell express routes - react router where static files will belong
//         aap.use(express.static(path.resolve(__dirname, "build")))
//         // on every request that comes in we 
//         app.get("*", req, res) => {
//             res.sendFile(path.resolve);

//             res.sendFile(path.resolve(__direname, "build", "index.html"))
//         };

//     }
// if (dev) {
//     app.use(morgan("dev"))
// }

// const server = createServer(app);
// server.listen(port, err => {
//     if (err) throw err;

//     console.log("Server started!");
// });



/** Require express */
const express = require("express");
/** Create the express app */
const app = express();
/** Require body-parser */
const bodyParser = require("body-parser");
/** Require mongoose as the MongoDB ORM */
const mongoose = require("mongoose");
/** Require the express routing */
const routes = require("./routes");
// require schema from models
const schemas = require("./models")

/** If 3001 isn't available, define a new port */
var PORT = process.env.PORT || 3001;

/** Define the usage of the app */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


/** The root directory will route on over to client/build to be accessed by the index file */
app.use(express.static("client/build"));
/** Listen in on the routes */
app.use(routes);


/** Make a connection to the MongoDB using the mongoose ORM */
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/homesuite"
);
mongoose.Promise = global.Promise;

app.listen(PORT, function(){
    console.log("App listening on port " + PORT);
});