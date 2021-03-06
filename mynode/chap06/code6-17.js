/**
 * New node file
 */
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
	var pathname = url.parse(request.url).pathname;
	
	if (pathname == '/') {
		fs.readFile('Index.html',function (error, data) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		});
	}
	else if (pathname == '/OtherPage') {
		fs.readFile('OtherPage.html',function (error, data) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		});
	}
	else if (pathname == '/Chrysanthemum.jpg') {
		fs.readFile('Chrysanthemum.jpg',function (error, data) {
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.end(data);
		});
	}
	else if (pathname == '/Kalimba.mp3') {
		fs.readFile('Kalimba.mp3',function (error, data) {
			response.writeHead(200, {'Content-Type': 'audio/mp3'});
			response.end(data);
		});
	}
}).listen(52273, function () {
	console.log('server running')
})