const jwt = require('jsonwebtoken')
require('dotenv').config()

function newToken(user){

    return new Promise((resolve, reject) => {

        jwt.sign({user}, process.env.JWT_KEY, {expiresIn: '1h'}, (error, token) => {

            if(error !== null){
                reject(error)
            } else {
                resolve(token)
            }
        })
    })
    
}

module.exports.newToken = newToken