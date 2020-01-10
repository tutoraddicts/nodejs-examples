var http = require('http');
var port = 4000;
const fs = require('fs');

http.createServer(function(req, res){
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('index.html').pipe(res);
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream('about.html').pipe(res);
    } else {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream('maintenence.html').pipe(res);
        console.log("path not found");
    }
    console.log("Server Created with no error");
}).listen(port);

