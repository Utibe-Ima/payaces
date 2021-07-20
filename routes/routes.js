const express = require("express")
const router = express.Router()
const registrationForm = require('../controllers/registration').registrationForm
const registration = require('../controllers/registration.js').registration
const loginForm = require('../controllers/login.js').loginForm
const login = require('../controllers/login.js').login
const logout = require('../controllers/login.js').logout
const indexPage = require('../controllers/home.js').homepage
const isLoggedIn = require('../middlewares/auth.js').isLoggedIn
const isNotLoggedIn = require('../middlewares/auth.js').isNotLoggedIn


// Registration Form
router.get('/registration', isLoggedIn, registrationForm)
// registration Process
router.post('/registration', registration)

// Login Form
router.get('/login', isLoggedIn, loginForm)
//Login Process
router.post('/login', login)
// Logout Process
router.get('/logout', logout)

// Home page
router.get('/', isNotLoggedIn, indexPage)

module.exports = router