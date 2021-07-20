require('dotenv').config()

const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')
const session = require('express-session')
const passport = require('passport')
const expressLayouts = require('express-ejs-layouts')
const model = require('./Models/User.js')
const db = require('./config/config.js')
const app = express()


// View engine congfiguration 
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'Public')))
app.use(session({
    secret: process.env.SESSION_TOKEN,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())


const Router = require('./routes/routes')
app.use('/', Router)








const PORT = process.env.PORT || 5000;
const server = http.createServer(app)

db.on('error', (error) => {
    console.error(error)
})

db.once('open', () => {
    server.listen(PORT, () => {
        console.log("Server is running")
    })
})

