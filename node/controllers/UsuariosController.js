class UsuariosController {
    static index(req, res){
        res.send('usuario: ' + req.params.id)
    }
}

module.exports = UsuariosController