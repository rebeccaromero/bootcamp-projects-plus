var users = require('../controllers/users.js');
// var session = require('express-session');
module.exports = function(app){
    app.get('/', function(req, res) {
        console.log('I am root');
        users.index(req, res);
    });
    
    app.post('/submit_registration', function(req, res) {
        users.register(req, res);
    });

    app.post('/submit_login', function(req, res) {
        users.login(req, res);
    });
    
    app.post('/logout', function(req, res) {
        users.logout(req, res);
    });
    
};