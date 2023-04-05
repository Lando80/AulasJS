const express = require('express')
const SiteControllers = require('./controllers/SiteControllers')
const router = express.Router()

router.get('/', SiteControllers.index)
router.get('/sobre', SiteControllers.sobre)

module.exports = router