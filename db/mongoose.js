const mongoose = require('mongoose')
const {tasksModel: Tasks, tasksSchema} = require('../models/taskModel')
const {usersModel: Users, usersSchema} = require('../models/userModel')
require('dotenv').config()

function schemaToArray(schema) {

    let rtnValue = []

    //console.log(schema)

    for (let key in schema){
        
        //TODO
        // Check for only the two properties that we want
        // by checking for class type Model and Schema

        rtnValue.push(schema[key])
    }

    return rtnValue
}

// let model = null
// let schema = null

// function setDependency (modelValue, schemaValue) {

//     let model = modelValue
//     let schema = schemaValue

// }

// Connect to db
function connect(objConnect) {

    let uri = 'mongodb+srv://todo_user:12345@cluster0-caj9q.mongodb.net/test?retryWrites=true&w=majority'

    console.log("Trying to connect")

    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "to-do"
    })
    .catch(error => {
        console.log("failed to connect")
        console.log(error)
    })


} // end of function connect

// Close db
function close(){

    mongoose.connection.close()
}

// POST - Create
function create(objCreate) {

    let serial = {}

    //use the schema as a template to check for properties
    //in document to write if the documente has a matching
    //property copy it to new object write the new object
    for (let key in tasksSchema.obj){

        if(objCreate.doc.hasOwnProperty(key)){

            serial[key] = objCreate.doc[key]
        }
        
    }

    return Tasks.create(serial)

}

// GET - Read One
function readOne(objRead) {

    return Tasks.findById(objRead.id).exec()
}

// GET - Find One
// function findOne(objFind, schemaObj){

//     let [model, schema] = schemaToArray(schemaObj)

//     console.log("mongoose","objfind.email",objFind.email)

//     //{email: objFind.email}


//     return model.find({}).exec()
// }

// GET - Read All
function readAll(objRead, schemaObj){

    let [model, schema] = schemaToArray(schemaObj)

    return model.find().exec()
}

// PATCH - Update
function update(objUpdate) {

    let serial = {}

    //use the schema as a template to check for properties
    //in document to write if the documente has a matching
    //property copy it to new object write the new object
    for (let key in tasksSchema.obj){

        if(objUpdate.doc.hasOwnProperty(key)){

            serial[key] = objUpdate.doc[key]
        }
        
    }

    // {$set: serial} can also be passed as just serial as
    // mongoose will automatically put the atomic operator $set
    return Tasks.updateOne({_id: objUpdate.id}, {$set: serial}).exec()
}


// PUT - Replace
function replace(objReplace){

    let serial = {}

    //use the schema as a template to check for properties
    //in document to write if the documente has a matching
    //property copy it to new object write the new object
    for (let key in tasksSchema.obj){

        if(objReplace.doc.hasOwnProperty(key)){

            serial[key] = objReplace.doc[key]
        }
    }


    return Tasks.replaceOne({_id: objReplace.id}, serial).exec()

}

// can't use delete as a function name 
// because it is a js keyword
function del(objDelete) {

    return Tasks.deleteOne({_id: objDelete.id}).exec()
}

module.exports.connect = connect
module.exports.close = close
module.exports.create = create
module.exports.readOne = readOne
// module.exports.findOne = findOne
module.exports.readAll = readAll
module.exports.update = update
module.exports.replace = replace
module.exports.del = del
// module.exports.setDependency = setDependency