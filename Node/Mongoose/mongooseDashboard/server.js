var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/panda_db');

var PandaSchema = new mongoose.Schema({
    name: { type: String },
    weight: { type: Number }
});
mongoose.model('Panda', PandaSchema);
var Panda = mongoose.model('Panda');

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    Panda.find({}, function(err, panda) {
        console.log('All Pandas');
        // console.log(panda);
        res.render("index", { pandas: panda });
    });
});

app.get('/pandas/new', function(req, res) {
    console.log('Rendering makePanda');
    res.render("makePanda");
});

app.get('/pandas/:id', function(req, res) {
    Panda.find({ _id: req.params.id }, function(err, panda) {
        console.log('One Panda to rule them all');
        res.render("panda", { pandas: panda });
    });
});

app.post('/panda_maker', function(req, res) {
    console.log('Redirecting');
    res.redirect("/pandas/new");
});

app.get('/pandas/edit/:id', function(req, res) {
    panda = Panda.find({ _id: req.params.id }, function(err, panda) {
        res.render("editPanda", { pandas: panda });
    });
});

app.post('/pandas', function(req, res) {
    console.log("POST DATA \n\n", req.body);
    var panda = new Panda({ name: req.body.name, weight: req.body.weight });
    panda.save(function (err) {
        if (err) {
            console.log('You goofed!');
        } else {
            console.log('Added Panda');
            res.redirect('/');
        };
    });
});

app.post('/pandas/:id', function(req, res) {
    Panda.findOne({_id: req.params.id}, function(err, panda){
        panda.name = req.body.name,
        panda.weight = req.body.weight,
        panda.save(function(err){
            console.log("Updated Panda!")
            res.redirect('/');
        });
    });
});

app.post('/pandas/destroy/:id', function(req, res) {
    console.log("POST DATA \n\n", req.body);
    Panda.remove({ _id: req.params.id }, function(err) {
        if (err) {
            console.log('You dundered!');
        } else {
            console.log('Deleted Poor Panda');
            res.redirect('/');
        };
    });
});

app.listen(6789, function() {
    console.log("listening on port 6789");
});