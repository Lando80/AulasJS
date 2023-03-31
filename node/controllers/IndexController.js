const path = require('path')

class IndexController {
    static inicio(req, res) {
        res.sendFile(path.resolve('views/index.html'))
    }

    static contato(req, res) {
        res.sendFile(path.resolve('views/contato.html'))
    }

    static orlando(req, res){
        res.send("<h1>Eu</h1>")
    }
}

module.exports = IndexController