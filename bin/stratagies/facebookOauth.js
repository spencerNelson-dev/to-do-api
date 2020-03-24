const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
require('dotenv').config()

//https://developers.facebook.com/docs/facebook-login/permissions#reference-default

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName','email']
},
function(accessToken, refreshToken, profile, cb) {

    //console.log("strat profile", profile)

    return cb(null, profile)
}))