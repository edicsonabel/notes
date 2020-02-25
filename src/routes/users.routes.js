const { Router } = require('express')
const router = Router()
const {
renderSignUpForm,
signUp,
renderSignInForm,
signIn,
logout
} = require('../controllers/users.controllers')

/* ROUTES */
router.get('/users/signup', renderSignUpForm) // SignUp Form
router.post('/users/signup', signUp) // SignUp
router.get('/users/signin', renderSignInForm) // SignIn Form
router.post('/users/signin', signIn) // SignIn
router.get('/users/logout', logout) // Logout

module.exports = router
