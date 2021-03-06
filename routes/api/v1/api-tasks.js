var express = require('express');
var router = express.Router();
const db = require('../../../db/mongoose')
const dbTasks = require('../../../models/taskModel')
const passport = require('passport')
const jwtUtils = require('../../../bin/jwtUtils')
const verify = require('../../../bin/verify')


// GET all tasks
// if a query string of userId is passed
// then we get only the tasks associated with 
// that user
router.get('/', passport.authenticate('bearer', {session: false}),
  async function (req, res, next) {

    let userId = req.query.userId

    // verify bearerToken
    let {user} = await jwtUtils.verifyBearerToken(req)

    // verify that user is in db and has admin privlages
    let isVerified = await verify.verifyUser(user)

    let readObj = {
        usersCollection: req.app.locals.usersCollection,
        id: userId
    }

    // if the user is verified and an admin
    // but no userId query string is found
    // then get all of the tasks
    if(user.admin && isVerified && !userId){

        db.readAll(readObj, dbTasks)
        .then(response => {

            res.json(response)
        })
        .catch(error => {

            console.log(error)
            res.json(500)
        })
        // if there is a user id
        // only return the tasks for that user
    } else if(userId){

        db.readAllByUser(readObj, dbTasks)
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


});

// GET single task 
router.get('/:taskId', passport.authenticate('bearer', {session: false}),
 function(req, res, next) {

    let readObj = {
        id: req.params.taskId,
        usersCollection: req.app.locals.usersCollection
    }

    db.readOne(readObj,dbTasks)
        .then(response => {

            res.json(response)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
})

// POST task
router.post('/', function (req, res, next) {

    let entry = req.body

    let createObj = {
        doc: entry,
        usersCollection: req.app.locals.usersCollection
    }

    db.create(createObj, dbTasks)
        .then(response => {
            res.json(response) //.ops[0] for mongo
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


// DELETE
router.delete('/:id', async function (req, res, next) {

    let deleteObj = {
        id: req.params.id,
        usersCollection: req.app.locals.usersCollection
    }

    try {

        let foundUser = await db.readOne(deleteObj, dbTasks)

        if (foundUser === null) {

            throw new Error("No user with matching id was found")
        } else {

            let dbResponse = await db.del(deleteObj, dbTasks)

            res.json(dbResponse)
        }

    } catch (error) {

        res.send(error)
    }
})

// PUT
router.put('/:id', async function (req, res, next) {

    let putObj = {
        id: req.params.id,
        usersCollection: req.app.locals.tasksCollection,
        doc: req.body
    }

    try {

        let response = await db.readOne(putObj, dbTasks)

        if (response == null) {

            // add if not found
            res.json(await db.create(putObj, dbTasks)) //.ops[0]

        } else {

            // if found
            res.json(await db.replace(putObj, dbTasks)) //.ops[0]
        }

    } catch (error) {

        console.log(error)
        res.status(500).json(error)
    }

})

// PATCH
router.patch('/:id', async function (req, res, next) {

    let patchObj = {
        id: req.params.id,
        usersCollection: req.app.locals.usersCollection,
        doc: req.body
    }

    try {

        let response = await db.readOne(patchObj,dbTasks)

        if (response == null) {

            throw new Error("Not Found")

        } else {

            // if found
            res.json(await db.update(patchObj,dbTasks))
        }

    } catch (error) {

        console.log(error)
        res.status(500).json(error)
    }

})

module.exports = router;