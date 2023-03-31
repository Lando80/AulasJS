const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes')

app.use(express.static('public'))

app.use('/', router)

app.listen(8080, () => {
    console.log('O servidor foi iniciado')
})