const { emails } = require('../models')

module.exports = class EmailsController {
    static async index(req, res) {
        const { id } = req.params
        const email = await emails.findByPk(id, {
            include: 'pessoa'
        })
        res.json(email)
    }
}