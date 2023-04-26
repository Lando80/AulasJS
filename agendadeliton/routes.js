const express = require('express')
const ContatosController = require('./controllers/ContatosController')
const LoginController = require('./controllers/LoginController')
const PessoasController = require('./controllers/PessoasController')
const EmailsController = require('./controllers/EmailsController')
const router = express.Router()

router.get('/', LoginController.validaToken, ContatosController.index)
router.post('/novo', ContatosController.salvarNovo)
router.delete('/excluir/:id', ContatosController.excluir)
router.put('/editar/:id', ContatosController.salvarEditar)

router.post('/login', LoginController.makeLogin)
router.get('/user', LoginController.validaToken, LoginController.user)

router.get('/pessoas', PessoasController.index)
router.get('/emails/:id', EmailsController.index)

module.exports = router