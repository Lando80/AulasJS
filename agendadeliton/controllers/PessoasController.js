const { pessoas } = require('../models')

module.exports = class PessoasController {
    static async index(req, res) {
        const lista = await pessoas.findAll({
            include: ['emails', 'generos']
        })
        res.json(lista)
    }
}