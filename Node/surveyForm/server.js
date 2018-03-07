var express = require("express");

var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("index");
});

app.post('/submitted', function(req, res) {
    console.log("POST DATA \n\n", req.body);
    var data = {
        name : req.body.name,
        location : req.body.location,
        language : req.body.language,
        comment : req.body.comment
    };
    res.render("submitted", {data: data});
});

app.post('/go_back', function(req, res) {
    res.redirect("/");
});
    
app.listen(8000, function() {
  console.log("listening on port 8000");
});