var http = require('http');

var server = http.createServer((request, response) => {
    console.log('httpServer is connecting...')
    response.writeHeader(200, {
        'content-type': 'text/html;charset="utf-8"'
    });
    response.write('This is content...');
    response.end();
}).listen(8080);

console.log('httpServer has connected...')