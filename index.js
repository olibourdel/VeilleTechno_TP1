const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT;

const server = http.createServer(async function(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    const fs = require('fs');

    fs.readFile('wwwroot/index.html').then(content => { res.end(content) });
});

server.listen(port, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});