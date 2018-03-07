var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/quoting_dojo_db');

var QuoteSchema = new mongoose.Schema({
    name: {type: String},
    quote: {type: String}
}, {timestamps: true});
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({extended: true}));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("index");
});

app.post('/submit_quote', function(req, res) {
    console.log("POST DATA \n\n", req.body);
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err) {
        if(err) {
            console.log('ERROR! ERROR! ERROR!');
        } else {
            console.log('QUOTE ADDED, MI AMIGO GORDO');
            res.redirect('/quotes');
        };
    });
});

app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quote){
        console.log('here');
        res.render("quotes", {quotes: quote});
    });
});

app.listen(5000, function() {
  console.log("listening on port 5000");
});