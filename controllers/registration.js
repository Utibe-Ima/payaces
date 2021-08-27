const express = require('express')
const router = express.Router()
const app = express()
const User = require('../Models/User.js')


module.exports.registrationForm = function(req, res) {
    res.render('registration', {layout: 'layouts/auth'})
}

module.exports.registration =  async(req, res) => {
    const {name, email, username, password, phone_number} = req.body;
    const userExists = await User.findOne({username: username});
    const check = /EG*/g && /CO*/g
    if (userExists) {
        throw new Error('User Already Exists')
    } 
    if (username == check) {
        await User.create({name, email, username, password, phone_number})
    } else {
        res.render('registration', {layout: 'layouts/auth'})
        throw new Error('Invalid Username Format')
    }
    res.redirect('/login')
}