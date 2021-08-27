const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    phone_number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.pre('save', async function (next) {
    this.username = await this.username.toUpperCase()
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt);
    next()
})

const model = mongoose.model('User', UserSchema)

model.prototype.verifyPassword = async function (password) {
    // runs the check to verify password
    let match = await bcrypt.compare(password, this.password)
    return match
}



module.exports = model