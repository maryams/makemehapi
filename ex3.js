var Hapi = require('hapi');
var Path = require('path');

var server = Hapi.createServer(8080);

server.route({
    method: 'GET', 
    path: '/',     
    handler: {
        file: Path.join(__dirname, "/index.html")
    }
});

server.start();