var express = require("express");
var session = require("express-session");
var app = express();

app.use(session({secret: "rawr"}));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/', function(request, response) {
    if (request.session.count){
        request.session.count++;
    } else {
        request.session.count = 1;
    };
    var count = request.session.count;
    console.log(count);
    response.render("main", {count});
});

app.post('/add_two', function(request, response) {
    request.session.count += 1;
    var count = request.session.count;
    console.log(count);
    response.redirect("/");
});

app.post('/reset', function(request, response) {
    request.session.count = 0;
    var count = request.session.count;
    console.log(count);
    response.redirect("/");
});
    
app.listen(8000, function() {
  console.log("listening on port 8000");
});