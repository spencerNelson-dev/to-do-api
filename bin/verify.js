const db = require('../db/mongoose')
const bcrypt = require('bcrypt')
const dbUsers = require('../models/userModel')

async function checkPassword(password, hash){

    return await bcrypt.compare(password,hash)
 }

async function verifyUser (user) {

    let rtnValue = false

    let users = await db.findUserByEmail(user, dbUsers)

    if(users.length == 1){

        rtnValue = true
    }

    return rtnValue

}

module.exports.verifyUser = verifyUser