require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect("mongodb://localhost/dues_payment", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;


module.exports = db;