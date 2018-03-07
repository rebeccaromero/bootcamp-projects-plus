var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var fs = require("fs");
var ejs = require("ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("index");
});

app.get('/board', function(req, res) {
    res.render("board");
});

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    var messages = [];
    console.log("Client/socket is connected!");
    socket.on("submit_new_user", function(name){
        console.log('submitted ' + name);
        socket.emit('server_response', messages);
    });
    socket.on('send_message', function(name, message){
        console.log(message);
        var string = "<p>" + name + ": " + message + "</p>"
        messages.push(string);
        io.emit('display_message', string);
    });
    // socket.on("push_reset_button", function(){
    //     console.log('click')
    //     count = 0;
    //     var message = "<h1>The button has been pushed " + count + " time(s)</h1>"
    //     io.emit("reset_response", message);
    // });
});