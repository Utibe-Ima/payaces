const express = require('express')
const router = express.Router()
const app = express()
const User = require('../Models/User.js')


module.exports.registrationForm = function(req, res) {
    res.render('registration')
}

module.exports.registration = function async(req, res) {
    User.create(req.body)
}