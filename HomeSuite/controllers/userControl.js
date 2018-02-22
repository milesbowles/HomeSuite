/** Bring in the database to be able to manipulate it */
const db = require("../models");
const bcrypt = require('bcrypt')
/** Find every element in the database */

/** Create a new user */


module.exports = {
    cryptData: function(password, effort) {
        // salt to make life harder for a potential hacker
        let salt = bcrypt.genSaltSync(effort)
        // return actual hash to store in db
        return hash = bcrypt.hashSync(password, salt)
    },

    passwordCheck: function(password, hash) {
        /** Returns true if the password has been encrypted */
        return bcrypt.compareSync(password, hash)
    },
    findAllUsers: function(email) {
        db.User.find({}, (err,res)=>{console.log(res)})
    },

    findUserToAuth: function(email, password, callback) {
        /** Search database for the email */
        db.User.find({email: email}, (err,res) => {
            console.log(res)
            /** If the email is not in database existence */
            if (res.length === 0) {
                console.log('incorrect email')
                /** If email exists in database */
            } else {
                /** Use callback to retreive the password */
                /** First check password and return */
                /** Rreturns true of false depending on if password's been previously encrypted */
                callback(this.passwordCheck(password, res[0].password))
            }
        })
    },
    findUserToUpdate: function(email, key, callback) {
        db.User.update({email: email}, {persistToken: key}, (err,res) => {
            callback(res[0])
        })
    },
    /** Takes in the token associated with the user */
    /** Callback allows access to contents of inner function */
    findPersistedUser: function(key, callback) {
        /** Search the database for the user associated with the key */
        db.User.find({persistToken: key} , (err, res) => {
            /** If there are existing results */
            if (res.length !== 0) {
                /** Send true through the callback to */
                callback(true)
                /** If no results for this user */
            } else {
                /** Send false through the callback */
                callback(false)
            }
        })
    },
    createUser: function(req) {
        db.User.create({
            email: req.body.email, 
            username: req.body.username,
            password: this.cryptData(req.body.password, 5), 
            loggedIn: true
        })
    }
}
