const passport = require('passport')
const GoogleStratagy = require('passport-google-oauth').OAuth2Strategy
require('dotenv').config()

passport.use(new GoogleStratagy({

    // The client ID and scecret are given to us by google in our
    // Google api OAuth 2.0 Client IDs
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,

    callbackURL: process.env.GOOGLE_CALLBACK_URL
},
function ( accessToken, refreshToken, profile, done){

    return done(null, profile)
}

))