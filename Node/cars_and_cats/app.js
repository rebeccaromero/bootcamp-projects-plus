var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);

    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/images/shelby.jpg') {
        fs.readFile('images/shelby.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/images/delorean.jpg') {
        fs.readFile('images/delorean.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/images/pikachu.jpg') {
        fs.readFile('images/pikachu.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/images/cat.jpg') {
        fs.readFile('images/cat.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/images/cat2.jpg') {
        fs.readFile('images/cat2.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/images/cat3.jpg') {
        fs.readFile('images/cat3.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('views/cars_new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    else {
        response.writeHead(404);
        response.end('Nothing to see here folks!!!');
    }
});

server.listen(7707);

console.log("Running in localhost at port 7707");