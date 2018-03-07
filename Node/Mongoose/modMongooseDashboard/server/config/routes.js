var pandas = require('../controllers/pandas.js');
module.exports = function(app){
    app.get('/', function(req, res) {
        pandas.show(req, res);
    });

    app.get('/pandas/new', function(req, res) {
        res.render("makePanda");
    });

    app.get('/pandas/:id', function(req, res) {
        pandas.show_by_id(req, res);
    });

    app.post('/panda_maker', function(req, res) {
        console.log('Redirecting');
        res.redirect("/pandas/new");
    });

    app.post('/pandas/edit/:id', function(req, res) {
        pandas.edit(req, res);
    });

    app.post('/pandas', function(req, res) {
        pandas.create(req, res);
    });

    app.post('/pandas/:id', function(req, res) {
        pandas.update(req, res);
    });

    app.post('/pandas/destroy/:id', function(req, res) {
        pandas.delete(req, res);
    });
}

