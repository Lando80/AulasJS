const express = require('express')
const router = express.Router()
const path = require('path')
const IndexController = require('./controllers/IndexController')
const UsuariosController = require('./controllers/UsuariosController')

router.get('/', IndexController.inicio)
router.get('/contato', IndexController.contato)
router.get('/orlando', IndexController.orlando)

router.get('/usuarios/:id', UsuariosController.index)

router.use((requisicao, resposta) => {
    resposta.status(404).sendFile(path.resolve('views/404.html'))
})

module.exports = router
