const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/', function(q, r) {
    r.sendFile(path.resolve('./views/index.html'))
})

module.exports = router