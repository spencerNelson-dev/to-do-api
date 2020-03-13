var express = require('express');
var router = express.Router();
const db = require('../../../db/mongoose')
const dbUsers = require('../../../models/userModel')
const bcrypt = require('bcrypt')
const jwtUtils = require('../../../bin/jwtUtils')

 async function checkPassword(password, hash){

    return await bcrypt.compare(password,hash)
 }




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

// GET user by id
router.get('/:id', function (req, res, next) {
    console.log("get user by id")

    let readObj = {
        id: req.params.id
    }

    db.readOne(readObj, dbUsers)
    .then(response => {

        res.json(response)
    })
    .catch(error => {
        console.error(error.name, error.message)
    })
})

// Post login
router.post('/login', function (req, res, nex) {
    console.log("login")

    let sentUser = req.body

    db.readAll(sentUser, dbUsers)
    .then(results => {
        console.log("db read all")

        // loop through users in database
        for (user of results) {

            // Check to see if the email matches
            if (user.email === sentUser.email) {
                console.log("Email found")

                // Check to see if the password matches
                return checkPassword(sentUser.password, user.password)
                .then(result => {
                    if(result){
                        return user
                    }
                })

            }
        } // end of for of
    }) //ReadAll
    .then( result => {
        
        if(result == undefined){
            res.json({token: ''})
        }

        // Create web token
        jwtUtils.newToken(result)
        .then(token => {
            res.json({token})
        })
        .catch(error => {
            console.log(error)
        })

    })
    .catch(error => {
        console.log(error)
    })
}) // End of post login

module.exports = router;