var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt');
const saltRounds = 8;
module.exports = {
    index: function(req, res){
        console.log('INDEX');
        User.find({}, function(err, users) {
            console.log(users);
        });
        if (req.session && 'user_id' in req.session) {
            console.log('My man');
            User.findOne({_id: req.session.user_id}, function(err, user) {
                res.render('success', {user: user});
            });
        } else {
            if (req.session.error_messages) {
                var messages = req.session.error_messages.split(",");
                req.session.error_messages = null;
            };
            if (req.session.login_errors) {
                var login_errors = req.session.login_errors;
                req.session.login_errors = null;
            };
            res.render('index', {messages: messages, login_errors: login_errors});
        };
    },
    register: function(req, res){
        console.log('REGISTERING');
        console.log(req.body.first_name);
        console.log(req.body.password);
        console.log('');
        // bcrypt.genSaltSync(8);
        var passwordsMatch = req.body.password === req.body.confirm_pw;
        if (!passwordsMatch) {
            console.log('PASSWORDS DON\'T MATCH');
            req.session.error_messages = 'Confirm password must match password';
            res.redirect('/');
        } else {
            var hrstart = process.hrtime();
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                hrend = process.hrtime(hrstart);
                console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000);
                var user = new User({ email: req.body.email, first_name: req.body.first_name, last_name: req.body.last_name, password: hash, birthday: req.body.bday });
                user.save(function (err) {
                    if (err) {
                        console.log('LOOKAMEE™ ' + err.message);
                        console.log(err.errors.email.properties)
                        req.session.error_messages = err.message;
                        res.redirect('/');
                    } else {
                        console.log('Added new user');
                        console.log(user.id);
                        req.session.user_id =  user.id
                        res.redirect('/');
                    };
                });
            });
        };
    },
    login: function(req, res){
        console.log('LOGGING IN');
        console.log(req.body.email);
        User.findOne({email: req.body.email}, function(err, user) {
            console.log('SHE CAN FLY, SHE CAN FLY, SHE CAN FLY!');
            if (user === null) {
                console.log('No such email');
                req.session.login_errors = 'No matching email found';
                res.redirect('/');
            } else {
                // bcrypt.hash(req.body.password, saltRounds, function(err, hash){
                //     console.log('VALID EMAIL');
                //     console.log('Input hash: ' + hash);
                //     console.log('db password ' + user.password);
                //     console.log(user);
                //     console.log(user.first_name);
                //     console.log('user id: ' + user.id);
                //     req.session.user_id = user.id;
                //     res.redirect('/');
                // });
                console.log('COMPARING PASSWORDS');
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    req.session.user_id = user.id;
                    res.redirect('/');
                } else {
                    req.session.login_errors = 'Invalid Password';
                    res.redirect('/')
                };
            };
        });
    },
    logout: function(req, res){
        console.log('LINCOLN LOGGING OUT');
        console.log(req.session.user_id);
        req.session.destroy(function(){
            console.log('Aiming to redirect, Pard');
            res.redirect('/');
        });
    }
};