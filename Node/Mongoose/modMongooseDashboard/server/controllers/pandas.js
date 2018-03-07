var mongoose = require("mongoose");
var Panda = mongoose.model('Panda');

module.exports = {
    show: function(req, res) {
        Panda.find({}, function(err, panda) {
            res.render("index", { pandas: panda });
        });
    }, 
    create: function(req, res) {
        var panda = new Panda({ name: req.body.name, weight: req.body.weight });
        panda.save(function (err) {
            if (err) {
                console.log('You goofed!');
            } else {
                console.log('Added Panda');
                res.redirect('/');
            };
        });
    },
    delete: function(req, res) {
        Panda.remove({ _id: req.params.id }, function(err) {
            if (err) {
                console.log('You dundered!');
            } else {
                console.log('Deleted Poor Panda');
                res.redirect('/');
            };
        });
    },
    update: function(req, res) {
        Panda.findOne({_id: req.params.id}, function(err, panda){
            panda.name = req.body.name,
            panda.weight = req.body.weight,
            panda.save(function(err){
                console.log("Updated Panda!")
                res.redirect('/');
            });
        });
    },
    show_by_id: function(req, res) {
        Panda.find({ _id: req.params.id }, function(err, panda) {
            console.log('One Panda to rule them all');
            res.render("panda", { pandas: panda });
        });
    }, 
    edit: function(req, res) {
        panda = Panda.find({ _id: req.params.id }, function(err, panda) {
            res.render("editPanda", { pandas: panda });
        });
    }
};