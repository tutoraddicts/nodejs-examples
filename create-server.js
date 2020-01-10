var http = require('http');
var hostname = '127.0.0.1';
var port = 4000;

var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end(`<div data-include="create-server.html"></div>`);
});

server.listen(port, hostname, function(){
    console.log("Server is running on port " + port);
});