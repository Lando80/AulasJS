module.exports = class SiteController {
    static index(req, res) {
        res.render('index')
    }

    static sobre(req, res) {
        res.render('sobre')
    }
}