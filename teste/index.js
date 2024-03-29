const express = require('express')
const router = require('./routes')
const app = express()


app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(express.static('public'))

app.use('/', router)

app.listen('3088', ()=>{
    console.log('Servidor iniciado na porta 3088!!!!')
})