var express = require("express");
// var bodyParser = require("body-parser");
var app = express();

// app.use(bodyParser.urlencoded({extended: true}));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("index");
});

var server = app.listen(6789, function() {
  console.log("listening on port 8000");
});
var count = 0;
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is:", socket.id);
    socket.on("push_epic_button", function(){
        console.log('click')
        count++;
        var message = "<h1>The button has been pushed " + count + " time(s)</h1>"
        io.emit("server_response", message);
    });
    socket.on("push_reset_button", function(){
        console.log('click')
        count = 0;
        var message = "<h1>The button has been pushed " + count + " time(s)</h1>"
        io.emit("reset_response", message);
    });
});