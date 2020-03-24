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

function verifyToken(token) {

    console.log(token)

    return new Promise((resolve, reject) => {

        jwt.verify(token, process.env.JWT_KEY, (error, payload) => {

            if (error !== null) {
                reject(error)
            } else {
                resolve(payload)
            }
        })
    })
}

function verifyBearerToken(req) {

    // isolate the bearer token from the headers
    let bearerToken = req.headers.authorization.split(' ')[1]

    // verify the token
    // and return the user
    return verifyToken(bearerToken)
    .catch(error => {
        console.log(error)
    })

}

module.exports.newToken = newToken
module.exports.verifyToken = verifyToken
module.exports.verifyBearerToken = verifyBearerToken