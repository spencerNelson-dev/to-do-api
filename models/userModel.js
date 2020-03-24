const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean
    }

})

// (name, schema, collection)
module.exports.usersModel = mongoose.model('Users', usersSchema, 'users')

module.exports.usersSchema = usersSchema