const express = require('express')
const ContatosController = require('./controllers/ContatosController')
const LoginController = require('./controllers/LoginController')
const router = express.Router()

router.get('/', LoginController.validaToken, ContatosController.index)
// router.get('/', ContatosController.index)
router.post('/novo', ContatosController.salvarNovo)
router.delete('/excluir/:id', ContatosController.excluir)
router.put('/editar/:id', ContatosController.salvarEditar)

router.post('/login', LoginController.makeLogin)

module.exports = router