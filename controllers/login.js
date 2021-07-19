require('dotenv')

const express = require('express')
const router = express.Router()
const app = express()
const passport = require('passport')
const session = require('express-session')
const User = require('../Models/User.js')


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

module.exports.loginForm = (req, res) => {
    res.render('login')
}

module.exports.login = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
})