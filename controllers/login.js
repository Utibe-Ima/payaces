require('dotenv').config()

const express = require('express')
const passport = require('passport')
const User = require('../Models/User.js')
const passportInitialize = require('../middlewares/passport-config.js')
const app = express()


module.exports.loginForm = (req, res) => {
    res.render('login')
}

module.exports.login = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
})

module.exports.logout = (req, res) => {
    req.logout();
    res.redirect('/login')
}