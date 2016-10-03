'use strict';
var http = require("http");
var url = require("url");

http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;

    if (pathname === 'hello') {
        response.writeHead(200, {"Content-Type": "text/plain"});
		response.end('Ok');
    }
  
}).listen(3000);