class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('show from newcontroller')
    }
}

module.exports = new NewsController;