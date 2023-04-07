var produtos = [
    {id: 1, nome: 'Arroz'},
    {id: 2, nome: 'Macarrão'},
    {id: 3, nome: 'Feijão'},
    {id: 4, nome: 'Carne'}
]

class ProdutoController {
    static index(req, res) {
        res.render('produtos/index', {
            produtos: produtos
        })
    }

    static new(req, res) {
        res.render('produtos/new')
    }

    static saveNew(req, res){
        var nomeProduto = req.body.nome
        produtos.push({
            id: produtos.length + 1,
            nome: nomeProduto
        })

        res.redirect('/produtos')
    }

    static edit(req, res) {
        var id = req.params.produto
        var produto = prosutos.find(p =>.id == id)

        res.render('produtos/edit', {
            produto: produto
        })
    }

    static saveEdit(req, res) {
        var id = req.params.produto
        var nomeProduto = req.body.nome
        produtos.forEach(function(produto, index){
            if (produto.id == id) {
                produto[index]
                nome: nomeProduto,
                id: id
            }
        })
    }
}

module.exports = ProdutoController