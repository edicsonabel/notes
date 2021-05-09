const { Router } = require('express')
const { renderIndex, renderAbout } = require('../controllers/index.controllers')

const router = Router()

/* ROUTES INDEX*/
router.get('/', renderIndex) // Home page
router.get('/about', renderAbout) // About page

module.exports = router
