var Hapi = require('hapi');
var server = Hapi.createServer(8080);

server.route({
  path: '/{name}',
   method:'GET',
   handler: function (request, reply) {
      reply("Hello " + request.params.name);                     
    }
  });
server.start();