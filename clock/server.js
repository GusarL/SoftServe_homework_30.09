'use strict';
var http = require("http"),
    url = require("url"),
    querystring = require('querystring');

http.createServer(function(request, response) {
    var pathname,
        minute,
        date,
        hour;
    
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    
    if (request.url === '/getTime') {
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