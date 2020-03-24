const passport = require('passport')
const BearerStrategy = require('passport-http-bearer')
const jwt = require('jsonwebtoken')
require('dotenv').config()

passport.use(new BearerStrategy(
    function (token, done) {

        //verify the token
        new Promise((resolve, reject) => {

            jwt.verify(token, process.env.JWT_KEY, function (err, payload) {

                if(err !== null){
                    reject(err)
                } else {
                    resolve(payload)
                }
            })
        })
        .then(payload => {
            console.log(payload)

            return done(null, payload)
        })
        .catch(error => {
            console.log(error)

            return done(error)
        })
    }
))