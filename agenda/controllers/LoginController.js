const {usuarios} = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class LoginController {

    static async makeLogin(req, res){
        const { email, senha } = req.body
        
        const usuarioObj = await usuarios.findOne({
            where:{
                email: email,
                status: 'A'
            }
        })
        
    
        if(!usuarioObj){
            res.status(401).json({
                error: "Usuário ou senha inválidos 1"
            }).end()
        }else{

            const sucesso = await bcrypt.compare(senha, usuarioObj.senha)
            
            if(sucesso){
                const token = await jwt.sign(usuarioObj.id, process.env.JWT_KEY)
                res.status(200).json({
                    token: token
                })
            }else{
                res.status(401).json({
                    error: "Usuario ou senha invalidos 2"
                }).end()
            }
            // res.json(sucesso)
            // res.json(usuarioObj)
        }


    }

    static validaToken(req, res, next){
        const token = req.headers["authorization"]
        jwt.verify(token, process.env.JWT_KEY, (error, sucess) => {
            if(!error){
                req.userId = sucess
                next()
            }else{
                res.status(401).json({
                    error: "Token inválido"
                })
            }
        })
    }

    static async user(req, res) {
        const usuario = await usuarios.findByPk(req.userId)
        res.json(usuario)
    }
}
module.exports = LoginController
