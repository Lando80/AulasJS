const express = require('express')
const SiteController = require('./controllers/SiteController')
const ProdutoController = require('./controllers/ProdutoController')
const router = express.Router()

router.get('/', SiteController.index)
router.get('/sobre', SiteController.sobre)

router.get('/produtos', ProdutoController.index)
router.get('/produtos/new', ProdutoController.new)
router.post('/produtos/new', ProdutoController.saveNew)
router.get('/produtos/:produto', ProdutoController.edit)
router.post('/produtos/:produto', ProdutoController.saveEdit)
router.get('/produtos/:produto/delete', ProdutoController.delete);

module.exports = router