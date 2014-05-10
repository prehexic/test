var http = require('http');
var host = process.env.VCAP_APP_HOST || process.env.OPENSHIFT_NODEJS_IP || 'localhost';
var port = process.env.VCAP_APP_PORT || process.env.OPENSHIFT_NODEJS_PORT || '3000';


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, host);
console.log('Server running on: ' + host + ":"+ port);
