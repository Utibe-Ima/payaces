require('dotenv')

const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const model = require('./Models/User.js')
const app = express()


// View engine congfiguration 
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', './views')
app.set('layouts', 'layouts/layout')


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'Public')))


const Router = require('./routes/routes')
app.use('/', Router)










const PORT = process.env.PORT || 5000;
const server = http.createServer(app)
server.listen(PORT, () => {
    console.log("Server is running")
})