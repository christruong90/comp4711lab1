'use strict';
var http = require('http');
var fs = require('fs');
// var numberOfRequests = 0;
http.createServer(function (request, responce) {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // request.n = numberOfRequests;
    // console.log('Request number ' + numberOfRequests + ' recioved!');
  
    // setTimeout(function () {
    //     fs.readFile('app.js', function (err, contents) {
    //         responce.writeHead(200, {'Content-type':'text/plain'});
    //         responce.write(contents +"\n"+ request.n+"\n");
    //         console.log("Responce to the request# " + request.n);
    //         responce.end();
    //     });
        
    // }, 2000);
   
    // numberOfRequests++;
    responce.writeHead(200, {'Content-type':'text/plain'});
    responce.write(time)
    responce.end()
}
).listen(8085);
console.log('listening ...');