const { Router } = require('express')
const router = Router()
const { isAuthenticated, isNotAuthenticated } = require('../helpers/auth')
const {
renderSignUpForm,
signUp,
renderSignInForm,
signIn,
logout
} = require('../controllers/users.controllers')

/* ROUTES */
router.get('/users/signup', isNotAuthenticated, renderSignUpForm) // SignUp Form
router.post('/users/signup', isNotAuthenticated, signUp) // SignUp
router.get('/users/signin', isNotAuthenticated, renderSignInForm) // SignIn Form
router.post('/users/signin', isNotAuthenticated, signIn) // SignIn
router.get('/users/logout', isAuthenticated, logout) // Logout

module.exports = router
