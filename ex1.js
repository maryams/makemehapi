var Hapi = require('hapi');
var server = Hapi.createServer(3000);

server.route({
   path: '/',
   method:'GET',
   handler: function (request, reply) {
      reply("Hello");                     
    }
  });
server.start();