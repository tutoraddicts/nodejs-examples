var fs =require('fs');
var http = require('http');
var port = 3000;

var server = http.createServer(function(req, res){
    console.log("Requested Url : " + req.url);
    res.writeHead(200, {'Content-Type' : 'application/json'});
    var jsonObj = {
        name : 'max',
        surname : 'tescas',
        age : 26
    };
    res.end(JSON.stringify(jsonObj));
}).listen(port);

console.log("server is running on  port : " + port);