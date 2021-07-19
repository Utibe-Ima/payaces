const express = require("express")
const router = express.Router()
const registrationForm = require('../controllers/registration').registrationForm
const registration = require('../controllers/registration.js').registration
const loginForm = require('../controllers/login.js').loginForm
const login = require('../controllers/login.js').login
const checkAuth = require('../middlewares/auth.js').checkAuthenticated
const checkNotAuth = require('../middlewares/auth.js').checkNotAuthenticated


// Registration Form
router.get('/registration', checkNotAuth, registrationForm)
// registration Process
router.post('/registration', checkNotAuth, registration)

// Login Form
router.get('/login', checkNotAuth, loginForm)
//Login Procress
router.post('/login', checkAuth, checkNotAuth, login)


module.exports = router