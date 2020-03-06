const mongoose = require('mongoose')
const {tasksModel: Tasks, tasksSchema} = require('../models/taskModel')
require('dotenv').config()

// Connect to db
function connect(objConnect) {

    const uri = `mongodb+srv://todo_user:1234@cluster0-caj9q.mongodb.net/test?retryWrites=true&w=majority`;

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

// GET - Read All
function readAll(objRead){

    return Tasks.find().exec()
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
module.exports.readAll = readAll
module.exports.update = update
module.exports.replace = replace
module.exports.del = del