'use strict';
var http = require("http"),
    url = require("url"),
    querystring = require('querystring'),
    fs = require('fs'),
    baseRoot = './';

http.createServer(function(request, response) {
    var pathname,
        minute,
        path,
        date,
        hour;
    
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    path = baseRoot + request.url;

    fs.exists(path, function(exists) {
        if (!exists) {
            response.writeHead(404);
            response.write('Bad request');
            response.end();
        } else {
            var file = fs.createReadStream(path);

            file.on('open', function (){
                file.pipe(response);
            });
        }
    });
    
    if (url.parse(request.url).pathname === '/getTime') {
        response.writeHead(200, {"Content-Type": "text/plain"});
		response.end(add0(hour) + ":" + add0(minute));
    }

    function add0 (m) {

    	if (m < 10) {
    		m = "0" + m;
    	}
    	return m;
    }
  
}).listen(3000);