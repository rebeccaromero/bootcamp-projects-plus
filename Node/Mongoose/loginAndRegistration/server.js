var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set("view engine", "ejs");
app.use(session({secret: 'safe'}));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(6789, function() {
    console.log("listening on port 6789");
});