var http = require('http');
var fs = require('fs');
// var numberOfRequests = 0;

let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    // document.getElementById("test1").innerHTML = time;

function onRequest(request, response) {
    response.writeHead(200, {'Content-type': 'text/html'});
    fs.readFile('index.html', null, function(error, data) {
        if(error) {
            response.writeHead(404);
            response.write('File not found');
        } else {
            response.write(data);
        }
        response.end()
    });
}
console.log('listening ...');
http.createServer(onRequest)

