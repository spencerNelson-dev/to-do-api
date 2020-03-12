var express = require('express');
var router = express.Router();
const db = require('../../../db/mongoose')
const dbUsers = require('../../../models/userModel')
const bcrypt = require('bcrypt')


// GET all users
router.get('/', function (req, res, next) {
    console.log("get Users")

    let readObj = {
        usersCollection: req.app.locals.usersCollection
    }

    db.readAll(readObj, dbUsers)
        .then(response => {

            res.json(response)
        })
        .catch(error => {

            console.log(error)
            res.json(500)
        })
})

// Post login
router.post('/login', function (req, res, nex) {
    console.log("login")

    let rtnValue = false

    let sentUser = req.body

    db.readAll(sentUser, dbUsers)
    .then(results => {

        // loop through users in database
        for (user of results) {

            // Check to see if the email matches
            if (user.email === sentUser.email) {
                console.log("Email found")

                // Check to see if the password matches
                bcrypt.compare(sentUser.password, user.password)
                    .then(result => {

                        if (result) {
                            res.json(result)
                        } else {
                            res.json(result)
                        }
                    })
                    .catch(error => {
                        console.log("bcrypt failed")
                    })

            } else {

                console.log("email not found")
            }
        } // end of for of

    }) //ReadAll
    .catch(error => {
        console.log(error)
    })
}) // End of post login

module.exports = router;