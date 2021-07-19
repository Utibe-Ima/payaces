const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name:{
        type: String
    },
    password: {
        type: String
    },
    salt: {
        type: String
    }
})

const model = mongoose.model('UserModel', UserSchema)


model.exports = model