/** Bring in the database to be able to manipulate it */
const db = require("../models");
/** Export the controllers */
module.exports = {
    /** Find every element in the database */
    findAll: function(req, res){
        db.Suite.find({}).then(function(data){
            res.json(data);
        });
    },
    /** Create a new user */
    addUser: function(req, res){
        db.Suite.create({
            /** Take in the query for creation of the user */
            userName: req.body.userName,
            password: req.body.password,
            loggedIn: req.body.loggedIn
        }).then(function(data){
            console.log("User successfully created");
        });
    },
    /** Update values by id */
    updateUser: function(req, res){
        db.Suite.update(
            /** This id will come in through the params, */
            /** In other words, it will be sent in the path url of the request */
            {_id: req.params.id},
            /** This is what will update within the object of the id given above */
            /** Must be sent in as an object */
            {$set: req.body}
        ).then(function(data){
            console.log("Successful update of user info");
        });
    },
    /** In case it's necessary to delete user */
    /** Delete by id */
    deleteUser: function(req, res){
        db.Suite.findById(
            /** Take in the user's id from the path url */
            {_id: req.params.id}
        ).then(function(data){
            data.remove();
        });
    }
};