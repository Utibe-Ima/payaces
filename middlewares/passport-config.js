const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../Models/User.js')
const bcrypt = require('bcrypt')



module.exports = function (passport){
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    })

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user)
        })
    })

    passport.use(new LocalStrategy(function(username, password, done){
        User.findOne({username: username}, function(err, user){
            if(err) return done(err)
            if (!user) return done(null, false, {message: 'Incorrect Password'})

            try {
                bcrypt.compare(password, user.password, function(err, response){
                    if (err) return done(err);
                    if (response === false) return done(null, false, {message: 'Incorrect Password'})
                        
                    return done(null, user)
                })
            } catch (error) {
                return done(error)
            }
        })
    }))
}