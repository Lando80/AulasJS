const {usuarios} = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


class LoginController {

    static async makeLogin(req, res){
        const { email, senha } = req.body

        const usuarioObj = await usuarios.findOne({
            where:{
                email: email,
                status: 'A'
            }
        })
        console.log(usuarioObj)
        if(!usuarioObj){
            res.status(401).json({
                error: "Usuário ou senha inválidos 1"
            }).end()
        }else{
            const sucesso = await bcrypt.compare(senha, usuarioObj.senha)
            if(sucesso){
                const token = await jwt.sign(usuarioObj.id, '@#@$@#$!')
                res.json({
                    token: token
                })
            }else{
                res.status(401).json({
                    error: "Usuario ou senha invalidos 2"
                }).end()
            }
            res.json(sucesso)
        }
    }
}
module.exports = LoginController
