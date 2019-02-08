var http = require('http');

let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("HELLO WORLD");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
