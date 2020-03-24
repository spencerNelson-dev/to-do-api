const mongoose = require('mongoose')
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
function create(objCreate, schemaObj) {

    let [model, schema] = schemaToArray(schemaObj)

    let serial = {}

    //use the schema as a template to check for properties
    //in document to write if the documente has a matching
    //property copy it to new object write the new object
    for (let key in schema.obj){

        if(objCreate.doc.hasOwnProperty(key)){

            serial[key] = objCreate.doc[key]
        }
        
    }

    return model.create(serial)
}

// GET - Read One
function readOne(objRead, schemaObj) {

    let [model, schema] = schemaToArray(schemaObj)
    
    return model.findById(objRead.id).exec()
}

// GET - Read by email
function findUserByEmail(objRead, schemaObj) {

    let [model, schema] = schemaToArray(schemaObj)

    return model.find({email: objRead.email}).exec()
}
 
// GET - Read All
function readAll(objRead, schemaObj){

    let [model, schema] = schemaToArray(schemaObj)

    return model.find().exec()
}

// GET - Read All Tasks by User Id
function readAllByUser(objRead, schemaObj) {

    let [model, schema] = schemaToArray(schemaObj)

    return model.find({userId: objRead.id}).exec()
}

// PATCH - Update
function update(objUpdate, schemaObj) {

    let [model, schema] = schemaToArray(schemaObj)

    let serial = {}

    //use the schema as a template to check for properties
    //in document to write if the documente has a matching
    //property copy it to new object write the new object
    for (let key in schema.obj){

        if(objUpdate.doc.hasOwnProperty(key)){

            serial[key] = objUpdate.doc[key]
        }
        
    }

    // {$set: serial} can also be passed as just serial as
    // mongoose will automatically put the atomic operator $set
    return model.updateOne({_id: objUpdate.id}, {$set: serial}).exec()
}


// PUT - Replace
function replace(objReplace, schemaObj){

    let [model, schema] = schemaToArray(schemaObj)

    let serial = {}

    //use the schema as a template to check for properties
    //in document to write if the documente has a matching
    //property copy it to new object write the new object
    for (let key in schema.obj){

        if(objReplace.doc.hasOwnProperty(key)){

            serial[key] = objReplace.doc[key]
        }
    }


    return model.replaceOne({_id: objReplace.id}, serial).exec()

}

// can't use delete as a function name 
// because it is a js keyword
function del(objDelete, schemaObj) {

    let [model, schema] = schemaToArray(schemaObj)

    return model.deleteOne({_id: objDelete.id}).exec()
}

module.exports.connect = connect
module.exports.close = close
module.exports.create = create
module.exports.readOne = readOne
module.exports.findUserByEmail = findUserByEmail
module.exports.readAllByUser = readAllByUser
module.exports.readAll = readAll
module.exports.update = update
module.exports.replace = replace
module.exports.del = del
// module.exports.setDependency = setDependency