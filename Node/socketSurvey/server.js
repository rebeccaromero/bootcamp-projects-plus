var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("index");
});

var server = app.listen(8000, function() {
  console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is:", socket.id);
    socket.on("posting_form", function(data){
        var formData = {};
        for(let i = 0; i < data.length; i++){
            formData[data[i]["name"]] = data[i]["value"];
        }
        console.log(formData);
        var lucky = Math.floor(Math.random()*1000);
        var message = "<p>You emitted the following information to the server:" + JSON.stringify(formData) + "</p> <p>Your lucky number emitted by the server is " + lucky + "</p>"
        socket.emit("updated_message", message);
    })
});