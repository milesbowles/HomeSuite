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
        return bcrypt.compareSync(password, hash)
    },
    findAllUsers: function(email) {
        db.User.find({}, (err,res)=>{console.log(res)})
    },
    findUserToAuth: function(email, password, callback) {
        db.User.find({email: email}, (err,res) => {
            console.log(res)
            if (res.length === 0) {
                console.log('incorrect email')
            } else {
                callback(this.passwordCheck(password, res[0].password))
            }
        })
    },
    findUserToUpdate: function(email, key, callback) {
        db.User.update({email: email}, {persistToken: key}, (err,res) => {
            callback(res[0])
        })
    },
    findPersistedUser: function(key, callback) {
        db.User.find({persistToken: key} , (err, res) => {
            if (res.length !== 0) {
                callback(true)
            } else {
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
