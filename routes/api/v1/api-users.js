var express = require('express');
var router = express.Router();
const passport = require('passport')
const db = require('../../../db/mongoose')
const dbUsers = require('../../../models/userModel')
const bcrypt = require('bcrypt')
const jwtUtils = require('../../../bin/jwtUtils')
const ls = require('local-storage')

// encrypt our password
 async function checkPassword(password, hash){

    return await bcrypt.compare(password,hash)
 }

// GET all users
router.get('/', passport.authenticate('bearer', {session: false}),
 async function (req, res, next) {
    console.log("get Users")

    // verify the bearer token
    let {user} = await jwtUtils.verifyBearerToken(req)

    // create the ojbect to send to our dal
    let readObj = {
        usersCollection: req.app.locals.usersCollection
    }

    // if the user has admin set as true
    if(user.admin){

        db.readAll(readObj, dbUsers)
        .then(response => {

            res.json(response)
        })
        .catch(error => {

            console.log(error)
            res.json(500)
        })
    } else {
        res.send("Not Authorized")
    }


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

// GET user by email
router.get('/email/:email', function(req, res, next) {
    console.log("get user by email")

    let readObj = {
        email: req.params.email
    }

    db.findUserByEmail(readObj, dbUsers)
    .then (response => {

        res.json(response)
    })
    .catch(error => {
        console.error(error.name, error.message)
    })
})

// POST - create user
router.post('/create', passport.authenticate('bearer', {session: false}),
 async function(req, res, next) {

    // bycrpt the password
    req.body.doc.password = await bcrypt.hash(req.body.doc.password, 5)

    // return the created user
    res.json(await db.create(req.body, dbUsers))
})

//PATCH - update user
router.patch('/update/:id', passport.authenticate('bearer', {session: false}),
async function(req, res, next) {

    let patchObj = {
        id: req.params.id,
        usersCollection: req.app.locals.usersCollection,
        doc: req.body
    }

    try {

        // find our user
        let response = await db.readOne(patchObj, dbUsers)

        // if not found throw an error
        if (response == null) {

            throw new Error("Not Found")

        } else {

            // if found
            res.json(await db.update(patchObj,dbUsers))
        }

    } catch (error) {

        console.log(error)
        res.status(500).json(error)
    }
})

// DELETE - user
router.delete('/delete/:id', passport.authenticate('bearer', {session: false}),
async function(req, res, next) {

    console.log("delete user", req.params.id)

    let deleteObj = {
        id: req.params.id,
        usersCollection: req.app.locals.usersCollection
    }

    try {

        let foundUser = await db.readOne(deleteObj, dbUsers)

        console.log("found user in user delete", foundUser)

        if (foundUser === null) {

            throw new Error("No user with matching id was found")
        } else {

            res.json(await db.del(deleteObj, dbUsers))
        }

    } catch (error) {

        res.send(error)
    }
})

// Post login
router.post('/login', function (req, res, next) {

    console.log("post login")

    let sentUser = req.body

    db.readAll(sentUser, dbUsers)
    .then(results => {

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
    .then( user => {
        
        // if no valid matches return
        // a empty token field
        if(user == undefined){
            res.json({token: ''})
        }

        // set the password to null so we don't
        // pass the password in our jwt
        user.password = null

        // Create web token
        // the payload is the user
        jwtUtils.newToken(user)
        .then(token => {

            res.json({token})

            // I get cors error if I redirect here
            //res.redirect(`http://localhost:3000?token=${token}`)
        })
        .catch(error => {
            console.log(error)
        })

    })
    .catch(error => {
        console.log(error)
    })
}) // End of post login

/* Google Oauth Section */

router.get('/auth/google/login',
    passport.authenticate('google', {scope: ['profile', 'email']})
)

router.use('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/', session: false}),
    async function (req, res) {

        // Google returns a email and name
        // we fist check to see if that email is associated
        // with a user in our database
        // if not we will create a new user using the email
        // and name

        let newUser ={
            firstName: req.user.name.givenName,
            lastName: req.user.name.familyName,
            userName: '',
            email: req.user.emails[0].value,
            //This password is a dummy, and cannot be used to login
            password: 'cna98p4pt9ragph985na',
            admin: false
        }

        let users = await db.findUserByEmail(newUser, dbUsers)
        .then (response => {
    
            console.log("findUserByEmail Response", response)
            return response
        })
        .catch(error => {
            console.error(error.name, error.message)
        })

        console.log(newUser, users)

        let user

        if( users.length == 0 ){

            user = await db.create({doc: newUser}, dbUsers)
        } else {

            user = users[0]
        }

        jwtUtils.newToken(user)
        .then(token => {

            res.redirect(`${process.env.INDEX}?token=${token}`)
        })
    })

/* Facebook Oauth Section */

router.get('/auth/facebook/login',
    passport.authenticate('facebook')
)

router.use('/auth/facebook/callback',
    passport.authenticate('facebook', {failureRedirect: '/', session: false}),
    async function (req, res) {

        // Facebook returns a email and name
        // we fist check to see if that email is associated
        // with a user in our database
        // if not we will create a new user using the email
        // and name

        let names = req.user.displayName.split(" ")

        console.log(req.user)

        let newUser ={
            firstName: names[0],
            lastName: names[names.length - 1],
            userName: '',
            email: `${req.user.email || req.user.id}@facebook.com`,
            password: 'cna98p4pt9ragph985na',
            admin: false
        }

        let users = await db.findUserByEmail(newUser, dbUsers)
        .then (response => {
    
            console.log("findUserByEmail Response", response)
            return response
        })
        .catch(error => {
            console.error(error.name, error.message)
        })

        console.log(newUser, users)

        let user

        if( users.length == 0 ){

            user = await db.create({doc: newUser}, dbUsers)
        } else {

            user = users[0]
        }

        jwtUtils.newToken(user)
        .then(token => {

            res.redirect(`${process.env.INDEX}?token=${token}`)
        })
    }
)

router.post('auth/verifytoken/',passport.authenticate('bearer', {session: false}),
 function (req, res, next) {

})

/* When we want to protect our fetch in the front end
    router.get('/',
passport.authenticate('bearer', { session: false}),
function (req, res) {

    // passport puts the result of the authenticate
    // as the user property of req
    // rename to payload so we know it is
    // our token payload
    let {user: payload} = req

    console.log(payload)
    // deb access code goes here

    //use authInfo (token payload) to
    // get user from database

    // Verify user has permission for
    // this endpoint
    
    // return data from db

    res.json(payload)
})
*/

module.exports = router;