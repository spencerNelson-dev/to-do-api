const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    isComplete: {
        type: Boolean
    }

})

// (name, schema, collection)
module.exports.tasksModel = mongoose.model('Tasks', tasksSchema, 'tasks')

module.exports.tasksSchema = tasksSchema