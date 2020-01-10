var express = require('express');
var app = express();
const hostName = '127.0.0.1';
const fs = require('fs');
var portNo = 4000;

var server = app.get('/', function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('index.html').pipe(res);
});

var server = app.get('/about', function(req, res) {
    res.writeHead(200, {'Content-type' : 'text/html'});
    fs.createReadStream('about.html').pipe(res);
});

server.listen(portNo, hostName,function(){
    console.log('server is Running on port : ' + portNo);
});