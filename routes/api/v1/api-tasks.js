var express = require('express');
var router = express.Router();
const db = require('../../../db/mongoose')
const dbTasks = require('../../../models/taskModel')


// GET all entries
router.get('/', function (req, res, next) {

    let readObj = {
        usersCollection: req.app.locals.usersCollection
    }

    db.readAll(readObj,dbTasks)
        .then(response => {

            res.json(response)
        })
        .catch(error => {

            console.log(error)
            res.json(500)
        })


});

// GET single entry
router.get('/task/:taskId', function(req, res, next) {

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

// GET all tasks with a certian user_id
router.get('/:userId', function (req, res, next) {

    let readObj = {
        id: req.params.userId,
        usersCollection: req.app.locals.usersCollection
    }

    db.readAllByUser(readObj,dbTasks)
        .then(response => {

            res.json(response)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
})

/* POSTS */

// POST Entry
router.post('/', function (req, res, next) {

    entry = req.body

    let createObj = {
        doc: entry,
        usersCollection: req.app.locals.usersCollection
    }

    db.create(createObj)
        .then(response => {
            res.json(response) //.ops[0] for mongo
        })
        .catch(error => {
            res.status(500).json(error)
        })
        .catch(err => {
            res.send(`User was not created.\nSomething went wrong with the password.`)
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

        console.log(foundUser)

        if (foundUser === null) {

            throw new Error("No user with matching id was found")
        } else {

            await db.del(deleteObj)

            res.json({})
        }

    } catch (error) {

        res.send(error)
    }
})

// PUT
router.put('/:id', async function (req, res, next) {

    let putObj = {
        id: req.params.id,
        usersCollection: req.app.locals.usersCollection,
        doc: req.body
    }

    try {

        let response = await db.readOne(putObj, dbTasks)

        if (response == null) {

            // add if not found
            res.json(await db.create(putObj)) //.ops[0]

        } else {

            // if found
            await db.replace(putObj)

            res.json(await db.readOne(putObj)) //.ops[0]
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
            await db.update(patchObj,dbTasks)

            res.json(await db.readOne(patchObj,dbTasks))
        }

    } catch (error) {

        console.log(error)
        res.status(500).json(error)
    }

})

module.exports = router;