var http = require('http');
var fileSystem = require('fs');

var server = http.createServer(function(req, resp){
    // read the fron end 
	fileSystem.readFile('./index.html', function(error, fileContent){
		if(error){
            // if any error occurs
			resp.writeHead(500, {'Content-Type': 'text/plain'});
			resp.end('Error');
		}
		else{
            // geting response
			resp.writeHead(200, {'Content-Type': 'text/html'});
			resp.write(fileContent);
			resp.end();
		}
	});
});

server.listen(8080);

console.log('Listening at: localhost:8080');