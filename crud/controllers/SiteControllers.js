class SiteControllers {
    static index(req, res) {
        res.render('index')
    }
    static sobre(req, res) {
        res.render('sobre')
    }
}

module.exports = SiteControllers