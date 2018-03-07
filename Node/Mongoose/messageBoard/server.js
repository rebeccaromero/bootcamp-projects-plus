var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/message_board_db');

var MessageSchema = new mongoose.Schema({
    name: {type: String},
    quote: {type: String}
});
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    Message.find({}, function(err, message){
        console.log('All Messages');
    res.render("index", {messages: message});
    });
});

app.post('/post_message', function(req, res) {
    console.log("POST DATA \n\n", req.body);
    var message = new Message({name: req.body.name, message: req.body.message});
    message.save(function(err) {
        if(err) {
            console.log('You goofed!');
        } else {
            console.log('Message received');
            res.redirect('/');
        };
    });
});

app.listen(5000, function() {
  console.log("listening on port 5000");
});