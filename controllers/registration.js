const express = require('express')
const router = express.Router()
const app = express()
const User = require('../Models/User.js')


module.exports.registrationForm = function(req, res) {
    res.render('registration')
}

module.exports.registration =  async(req, res) => {
    const {name, email, username, password} = req.body;

    const userExists = await User.findOne({username: username});
    if (userExists) {
        throw new Error('User Already Exists')
    } else {
        await User.create({name, email, username, password})
    }

    res.redirect('/login')
}