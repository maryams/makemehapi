var Hapi = require('hapi');
var path = require('path');

var server = Hapi.createServer(3000);

server.route({
  path: '/foo/bar/baz/{filename}',
  method:'GET',
  handler : {
    directory: {path: './'}
    }
  }
);

server.start();

/*


var Hapi = require('hapi');
   var path = require('path');
   
   var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
   server.route({
       method: 'GET',
       path: '/foo/bar/baz/{filename}',
       handler: {
           directory: {path: path.join(__dirname, '/public')}
       }
   });
   server.start();

*/